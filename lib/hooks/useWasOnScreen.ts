import { MutableRefObject, useEffect, useState } from "react";

export function useWasOnScreen(ref: MutableRefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [wasIntersected, setWasIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    if (isIntersecting && !wasIntersected) {
      setWasIntersected(true);
    }
  }, [wasIntersected, isIntersecting]);

  return wasIntersected;
}
