import {
  useRef, useEffect,
} from 'react';

let elementRefs = null;

const useScrollSpy = (options = {}) => {
  elementRefs = useRef({});

  const observe = (id, callback) => (el) => {
    if (el) {
      elementRefs.current[id] = el;
      elementRefs.current[id].onEnterView = callback;
    }
  };

  const getElementById = (id) => elementRefs.current[id];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.onEnterView();
        }
      });
    }, options);

    Object.values(elementRefs.current).forEach((element) => {
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return {
    observe,
    getElementById,
  };
};

export default useScrollSpy;
