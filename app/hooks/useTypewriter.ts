"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const TYPE_MS = 105;
const DELETE_MS = 55;
const HOLD_MS = 1500;
const GAP_MS = 320;

/**
 * Cycles through `words`, typing and deleting one character at a time.
 * Falls back to a static first word when the user prefers reduced motion.
 */
export function useTypewriter(words: string[]): string {
  const reduced = useReducedMotion();
  const [text, setText] = useState(words[0] ?? "");
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (reduced) return;

    let wordIndex = 0;
    let charIndex = words[0]?.length ?? 0;
    let deleting = false;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const word = words[wordIndex] ?? "";

      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex >= word.length) {
          deleting = true;
          timer.current = setTimeout(tick, HOLD_MS);
          return;
        }
        timer.current = setTimeout(tick, TYPE_MS);
        return;
      }

      charIndex--;
      setText(word.slice(0, Math.max(charIndex, 0)));
      if (charIndex <= 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
        timer.current = setTimeout(tick, GAP_MS);
        return;
      }
      timer.current = setTimeout(tick, DELETE_MS);
    };

    // Hold the fully-typed first word, then start deleting.
    timer.current = setTimeout(() => {
      deleting = true;
      tick();
    }, HOLD_MS);

    return () => {
      cancelled = true;
      if (timer.current) clearTimeout(timer.current);
    };
  }, [reduced, words]);

  return reduced ? (words[0] ?? "") : text;
}
