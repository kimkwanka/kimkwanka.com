import { useRef, useEffect, useState, MouseEvent } from 'react';

interface IIntersectionObserverOptions {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface ICustomHTMLElement extends HTMLElement {
  onEnterView?: () => void;
  onExitView?: () => void;
  observerId: string;
}

interface IElementInView {
  id: string;
  isInView?: boolean;
}

const useScrollSpy = (options: IIntersectionObserverOptions = {}) => {
  const { root = null, rootMargin = '', threshold = 0 } = options;
  const elementRefs = useRef<Map<string, ICustomHTMLElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [observedElements, setObservedElements] = useState<
    Map<string, IElementInView>
  >(new Map());

  const observe =
    (id: string, onEnterView?: () => void, onExitView?: () => void) =>
    (el: HTMLElement | null) => {
      if (el) {
        elementRefs.current.set(id, {
          ...el,
          onEnterView,
          onExitView,
          observerId: id,
        });
      }
    };

  const isInView = (id: string) => observedElements?.get(id)?.isInView;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const updatedElementsInView: Map<string, IElementInView> = new Map();

        entries.forEach((entry) => {
          const targetElement = entry.target as ICustomHTMLElement;
          if (entry.isIntersecting) {
            targetElement.onEnterView?.();
          } else {
            targetElement.onExitView?.();
          }

          updatedElementsInView.set(targetElement.observerId, {
            isInView: entry.isIntersecting,
            id: targetElement.observerId,
          });
        });

        setObservedElements(updatedElementsInView);
      },
      { root, rootMargin, threshold },
    );

    elementRefs.current.forEach((element) => {
      observerRef?.current?.observe(element);
    });

    return () => {
      observerRef?.current?.disconnect();
    };
  }, [root, rootMargin, threshold]);

  const scrollToTarget = (e: MouseEvent<HTMLAnchorElement>) => {
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
