import {
  useEffect,
  useState,
  useContext,
  createContext,
  MouseEvent,
  FC,
  Dispatch,
  SetStateAction,
} from 'react';

import useScrollSpy from '../useScrollSpy/useScrollSpy';

interface IContextProps {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
}

const SectionContext = createContext<Partial<IContextProps>>({});

const SectionProvider: FC = ({ children }) => {
  const [currentSection, setCurrentSection] = useState<string>('');

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};

const scrollToSection = (e: MouseEvent<HTMLAnchorElement>) => {
  // When we're not on '/', behave like a regular link
  if (window.location.pathname !== '/') {
    return;
  }
  e.preventDefault();

  document
    .querySelector(e.currentTarget.hash)
    ?.scrollIntoView({ behavior: 'smooth' });
};

const useSections = () => {
  const { observe } = useScrollSpy({ rootMargin: '-50% 0px -50% 0px' });

  const { currentSection, setCurrentSection } = useContext(SectionContext);

  useEffect(() => {
    return () => {
      if (window.location.pathname !== '/') {
        setCurrentSection?.('');
      }
    };
  }, [setCurrentSection]);

  const observeSection = (id: string) =>
    observe({
      id,
      skipFirstEvent: false,
      onEnterView: () => {
        setCurrentSection?.(id);
      },
    });

  return { observeSection, currentSection };
};

export { useSections, scrollToSection, SectionProvider };
