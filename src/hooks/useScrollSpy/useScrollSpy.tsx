import { useRef, useEffect, useState } from 'react';

const useScrollSpy = (options = {}) => {
  const { root = null, rootMargin = '', thresholds = 0 } = options;
  const elementRefs = useRef({});
  const observerRef = useRef(null);

  const [observedElements, setObservedElements] = useState({});

  const observe =
    (id: string, onEnterView = null, onExitView = null) =>
    (el) => {
      if (el) {
        elementRefs.current[id] = el;
        elementRefs.current[id].onEnterView = onEnterView;
        elementRefs.current[id].onExitView = onExitView;
        elementRefs.current[id].observerId = id;
      }
    };

  const isInView = (id) => observedElements[id]?.isInView;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const updatedElementsInView = {};

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.onEnterView?.();
          } else {
            entry.target.onExitView?.();
          }

          updatedElementsInView[entry.target.observerId] = {
            isInView: entry.isIntersecting,
            id: entry.target.observerId,
          };
        });

        setObservedElements(updatedElementsInView);
      },
      { root, rootMargin, thresholds },
    );

    Object.values(elementRefs.current).forEach((element) => {
      observerRef.current.observe(element);
    });

    return () => {
      observerRef.current.disconnect();
    };
  }, [root, rootMargin, thresholds]);

  const scrollToTarget = (e) => {
    if (window.location.pathname !== '/') {
      return;
    }
    e.preventDefault();
    document
      .querySelector(e.currentTarget.hash)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    observe,
    isInView,
    scrollToTarget,
  };
};

export default useScrollSpy;
