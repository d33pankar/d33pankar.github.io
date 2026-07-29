import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'cv.fontSize';
const DEFAULT_SIZE = 15;
const MIN_SIZE = 11;
const MAX_SIZE = 24;
const LINE_RATIO = 1.7;

// Controls the editor code font size. Applies the value as CSS variables on the
// document root so CodeView (and anything else) can consume it without re-rendering.
export function useFontSize() {
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);

  useEffect(() => {
    try {
      const saved = parseInt(window.localStorage.getItem(STORAGE_KEY), 10);
      if (!Number.isNaN(saved) && saved >= MIN_SIZE && saved <= MAX_SIZE) {
        setFontSize(saved);
      }
    } catch (_e) {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--editor-font-size', `${fontSize}px`);
    root.style.setProperty('--editor-line-height', `${Math.round(fontSize * LINE_RATIO)}px`);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(fontSize));
    } catch (_e) {}
  }, [fontSize]);

  const increase = useCallback(() => setFontSize((s) => Math.min(MAX_SIZE, s + 1)), []);
  const decrease = useCallback(() => setFontSize((s) => Math.max(MIN_SIZE, s - 1)), []);
  const reset = useCallback(() => setFontSize(DEFAULT_SIZE), []);

  return {
    fontSize,
    increase,
    decrease,
    reset,
    canIncrease: fontSize < MAX_SIZE,
    canDecrease: fontSize > MIN_SIZE,
    min: MIN_SIZE,
    max: MAX_SIZE,
    defaultSize: DEFAULT_SIZE,
  };
}
