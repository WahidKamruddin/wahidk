"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const SECTION_IDS = ["top", "about", "work", "contact"] as const;
export type SectionIndex = 0 | 1 | 2 | 3;

type ChromeContextValue = {
  /** True while the viewer is "inside the cup" — drives the dark nav inversion. */
  inside: boolean;
  setInside: (v: boolean) => void;
  /** Active section for the nav dots. */
  active: SectionIndex;
};

const ChromeContext = createContext<ChromeContextValue | null>(null);

export function useChrome() {
  const ctx = useContext(ChromeContext);
  if (!ctx) throw new Error("useChrome must be used within <ChromeProvider>");
  return ctx;
}

export function ChromeProvider({ children }: { children: React.ReactNode }) {
  const [inside, setInsideState] = useState(false);
  const [active, setActive] = useState<SectionIndex>(0);

  const setInside = useCallback((v: boolean) => {
    setInsideState((prev) => (prev === v ? prev : v));
  }, []);

  useEffect(() => {
    const compute = () => {
      const threshold = window.innerHeight * 0.4;
      let next: SectionIndex = 0;
      SECTION_IDS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          next = i as SectionIndex;
        }
      });
      setActive((prev) => (prev === next ? prev : next));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const value = useMemo(
    () => ({ inside, setInside, active }),
    [inside, setInside, active],
  );

  return (
    <ChromeContext.Provider value={value}>{children}</ChromeContext.Provider>
  );
}
