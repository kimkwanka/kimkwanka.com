import { useRef, useEffect, useState } from 'react';

interface IIntersectionObserverOptions {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface IObserved {
  element: Element;
  onEnterView?: () => void;
  onExitView?: () => void;
  id: string;
  isInView: boolean | undefined;
  once: boolean;
}

const useScrollSpy = (options: IIntersectionObserverOptions = {}) => {
  const { root = null, rootMargin = '', threshold = 0 } = options;
  const observedElementsMapRef = useRef<Map<string, IObserved>>(new Map());
  const lookupMapRef = useRef<WeakMap<Element, IObserved>>(new WeakMap());

  const observerRef = useRef<IntersectionObserver | null>(null);

  const [stateElements, setStateElements] = useState<Map<string, IObserved>>(
    new Map(),
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const updatedMap = new Map(observedElementsMapRef.current);

        entries.forEach((entry) => {
          const targetElement = lookupMapRef.current.get(entry.target);

          if (targetElement) {
            if (
              entry.isIntersecting &&
              typeof targetElement.isInView !== 'undefined'
            ) {
              targetElement.onEnterView?.();
            } else if (typeof targetElement.isInView !== 'undefined') {
              targetElement.onExitView?.();
            }

            if (
              targetElement.once &&
              typeof targetElement.isInView !== 'undefined'
            ) {
              observerRef?.current?.unobserve(targetElement.element);
            }

            targetElement.isInView = entry.isIntersecting;

            updatedMap.set(targetElement.id, targetElement);
          }
        });

        setStateElements(updatedMap);
      },
      { root, rootMargin, threshold },
    );

    observedElementsMapRef.current.forEach(({ element }) => {
      observerRef?.current?.observe(element);
    });

    return () => {
      observerRef?.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, rootMargin, JSON.stringify(threshold)]);

  const observe =
    (
      id: string,
      once = false,
      onEnterView?: () => void,
      onExitView?: () => void,
    ) =>
    (el: Element | null) => {
      if (el && !observedElementsMapRef.current.get(id)) {
        const newElement = {
          element: el,
          id,
          onEnterView,
          onExitView,
          isInView: undefined,
          lastInView: false,
          once,
        };

        observedElementsMapRef.current.set(id, newElement);
        const observedElement = observedElementsMapRef.current.get(id);

        if (observedElement) {
          lookupMapRef.current.set(el, observedElement);
        }
      }
    };

  const isInView = (id: string) => stateElements?.get(id)?.isInView;

  return {
    observe,
    isInView,
  };
};

export default useScrollSpy;
