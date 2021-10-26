import { useRef, useEffect, useState } from 'react';

interface IIntersectionObserverOptions {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
}

interface IObserved {
  element: Element;
  id: string;
  onEnterView?: () => void;
  onExitView?: () => void;
  isInView?: boolean;
  unobserveOnEnter: boolean;
  skipFirstEvent: boolean;
}

interface IObserveOptions {
  id: string;
  onEnterView?: () => void;
  onExitView?: () => void;
  isInView?: boolean;
  unobserveOnEnter: boolean;
  skipFirstEvent: boolean;
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
              !(
                targetElement.skipFirstEvent &&
                typeof targetElement.isInView === 'undefined'
              )
            ) {
              if (entry.isIntersecting) {
                targetElement.onEnterView?.();
              } else {
                targetElement.onExitView?.();
              }
            }

            if (
              targetElement.unobserveOnEnter &&
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

  interface IObserveParams {
    // eslint-disable-next-line no-unused-vars
    (param: string): (el: Element | null) => void;
    // eslint-disable-next-line no-unused-vars
    (param: object): (el: Element | null) => void;
  }

  const observe: IObserveParams = (param) => (el: Element | null) => {
    if (!el) {
      return;
    }

    let newElement = {} as IObserved;
    let id = '';

    if (typeof param === 'string') {
      id = param;

      newElement = {
        element: el,
        id,
        unobserveOnEnter: false,
        skipFirstEvent: true,
      };
    } else {
      const {
        id: _id,
        onEnterView,
        onExitView,
        unobserveOnEnter = false,
        skipFirstEvent = true,
      } = param as IObserveOptions;

      id = _id;

      newElement = {
        element: el,
        id: _id,
        onEnterView,
        onExitView,
        unobserveOnEnter,
        skipFirstEvent,
      };
    }

    if (!observedElementsMapRef.current.get(id)) {
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
