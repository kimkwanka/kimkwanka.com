import {
  useRef, useEffect, useState, useContext, createContext,
} from 'react';

let scrollSectionRefs = null;

const ScrollSpyContext = createContext(null);
const useScrollSpyContext = () => useContext(ScrollSpyContext);

const ScrollSpyProvider = ({ children }) => {
  const [currentScrollSection, setCurrentScrollSection] = useState(null);

  return (
    <ScrollSpyContext.Provider value={[currentScrollSection, setCurrentScrollSection]}>
      {children}
    </ScrollSpyContext.Provider>
  );
};

const useScrollSpy = () => {
  scrollSectionRefs = useRef([]);

  const [, setCurrentScrollSection] = useContext(ScrollSpyContext);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentScrollSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px',
    });

    Object.values(scrollSectionRefs.current).forEach((section) => {
      observer.observe(section);
    });
  }, [setCurrentScrollSection]);
};

const addSectionRef = (sectionHash) => (el) => {
  scrollSectionRefs.current[sectionHash] = el;
};

const scrollToTarget = (e) => {
  if (window.location.pathname !== '/') {
    return;
  }
  e.preventDefault();

  scrollSectionRefs.current[e.currentTarget.hash].scrollIntoView({ behavior: 'smooth' });
};

export {
  ScrollSpyProvider, addSectionRef, useScrollSpy, scrollToTarget, useScrollSpyContext,
};
