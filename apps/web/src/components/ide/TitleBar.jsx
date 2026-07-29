import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Minus, Plus, Square, X } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme.jsx';
import { useFontSize } from '@/hooks/use-font-size.jsx';
import { cv } from '@/data/cv.js';

const SWATCH = {
  dracula: '#bd93f9',
  github: '#0969da',
  solarized: '#268bd2',
  nord: '#88c0d0',
  onedark: '#61afef',
  monokai: '#a6e22e',
  tokyonight: '#7aa2f7',
};

export default function TitleBar() {
  const { theme, setTheme, themes } = useTheme();
  const { fontSize, increase, decrease, reset, canIncrease, canDecrease } = useFontSize();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const current = themes.find((t) => t.id === theme) || themes[0];

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="titlebar">
      <div className="window-controls"><i /><i /><i /></div>
      <div className="titlebar-title">{cv.identity.handle} / portfolio — visual-studio-code</div>

      <div className="titlebar-tools">
        <div className="fontsize-control" role="group" aria-label="Editor text size">
          <button onClick={decrease} disabled={!canDecrease} title="Decrease text size" aria-label="Decrease text size">
            <Minus size={12} />
          </button>
          <button
            className="fontsize-value"
            onClick={reset}
            title="Reset text size"
            aria-label="Reset text size"
          >
            {fontSize}px
          </button>
          <button onClick={increase} disabled={!canIncrease} title="Increase text size" aria-label="Increase text size">
            <Plus size={12} />
          </button>
        </div>

        <div className="theme-dropdown" ref={dropdownRef}>
          <button
            className="theme-menu"
            onClick={() => setOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={open}
            title="Change theme"
          >
            <span style={{ background: SWATCH[current.id] }} />
            {current.label}
            <ChevronDown size={11} />
          </button>
          {open && (
            <ul className="theme-list" role="listbox" aria-label="Theme">
              {themes.map((t) => (
                <li key={t.id} role="option" aria-selected={t.id === theme}>
                  <button
                    className={t.id === theme ? 'is-active' : ''}
                    onClick={() => {
                      setTheme(t.id);
                      setOpen(false);
                    }}
                  >
                    <span className="theme-swatch" style={{ background: SWATCH[t.id] }} />
                    <span className="theme-label">{t.label}</span>
                    {t.id === theme && <Check size={12} />}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="window-actions"><Minus size={13} /><Square size={11} /><X size={13} /></div>
    </header>
  );
}
