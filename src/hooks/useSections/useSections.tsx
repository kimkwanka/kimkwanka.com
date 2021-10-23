import { useState, useContext, createContext, MouseEvent, FC } from 'react';

import useScrollSpy from '../useScrollSpy/useScrollSpy';

const SectionContext = createContext(null);

const SectionProvider: FC = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(null);

  return (
    <SectionContext.Provider value={[currentSection, setCurrentSection]}>
      {children}
    </SectionContext.Provider>
  );
};

const useSections = () => {
  const { observe } = useScrollSpy({ rootMargin: '-50% 0px -50% 0px' });

  const [currentSection, setCurrentSection] = useContext(SectionContext);

  const observeSection = (id: string) =>
    observe(id, () => {
      setCurrentSection(id);
    });

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== '/') {
      return;
    }
    e.preventDefault();
    document
      .querySelector(e.currentTarget.hash)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return { observeSection, scrollToSection, currentSection };
};

export { useSections, SectionProvider };
