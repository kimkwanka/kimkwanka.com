import {
  useState, useContext, createContext,
} from 'react';

import useScrollSpy from '../useScrollSpy/useScrollSpy';

const SectionContext = createContext(null);

const SectionProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(null);

  return (
    <SectionContext.Provider value={[currentSection, setCurrentSection]}>
      {children}
    </SectionContext.Provider>
  );
};

const useSections = () => {
  const { observe, getElementById } = useScrollSpy({ rootMargin: '-50% 0px -50% 0px' });

  const [currentSection, setCurrentSection] = useContext(SectionContext);

  const observeSection = (id) => observe(id, () => setCurrentSection(id));

  const scrollToSection = (e) => {
    if (window.location.pathname !== '/') {
      return;
    }
    e.preventDefault();

    getElementById(e.currentTarget.hash).scrollIntoView({ behavior: 'smooth' });
  };

  return { observeSection, scrollToSection, currentSection };
};


// const useScrollSpy = () => {
//   scrollSectionRefs = useRef([]);

//   const [, setCurrentScrollSection] = useContext(ScrollSpyContext);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setCurrentScrollSection(entry.target.id);
//         }
//       });
//     }, {
//       rootMargin: '-50% 0px -50% 0px',
//     });

//     Object.values(scrollSectionRefs.current).forEach((section) => {
//       observer.observe(section);
//     });
//     return () => {
//       observer.disconnect();
//     };
//   }, [setCurrentScrollSection]);
// };

// const addSectionRef = (sectionHash) => (el) => {
//   scrollSectionRefs.current[sectionHash] = el;
// };

export { useSections, SectionProvider };
