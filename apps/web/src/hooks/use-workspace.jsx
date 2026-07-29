import React, { createContext, useContext, useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { FILES } from '@/data/cv.js';

const WorkspaceContext = createContext(null);

export function WorkspaceProvider({ children }) {
  const [openTabs, setOpenTabs] = useState(FILES.filter((f) => f.defaultOpen !== false).map((f) => f.id));
  const [activeId, setActiveId] = useState(FILES[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const scrollerRef = useRef(null);
  const lockScrollSpyRef = useRef(0);

  const openFile = useCallback((id) => {
    if (!FILES.some((f) => f.id === id)) return;
    setOpenTabs((tabs) => (tabs.includes(id) ? tabs : [...tabs, id]));
    setActiveId(id);
    lockScrollSpyRef.current = Date.now() + 800;
    const scrollToSection = () => {
      const el = document.getElementById(`file-${id}`);
      const scroller = scrollerRef.current;
      if (!el || !scroller) return;
      // Position relative to the scroll container (not the page), so the section's
      // top lands exactly at the top of the viewport — no over-scroll.
      const top = scroller.scrollTop + el.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
      scroller.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };
    // Wait for a first-time-opened section (e.g. resume) to mount before scrolling.
    requestAnimationFrame(() => requestAnimationFrame(scrollToSection));
  }, []);

  const closeTab = useCallback(
    (id) => {
      setOpenTabs((tabs) => {
        const next = tabs.filter((t) => t !== id);
        if (activeId === id && next.length) setActiveId(next[0]);
        return next;
      });
    },
    [activeId],
  );

  const reopenAll = useCallback(() => {
    setOpenTabs(FILES.filter((f) => f.defaultOpen !== false).map((f) => f.id));
  }, []);

  const toggleSidebar = useCallback(() => setSidebarOpen((v) => !v), []);
  const toggleTerminal = useCallback(() => setTerminalOpen((v) => !v), []);
  const togglePalette = useCallback(() => setPaletteOpen((v) => !v), []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const onScroll = () => {
      if (Date.now() < lockScrollSpyRef.current) return;
      // Probe a point 25% down the visible viewport, in viewport coordinates.
      const probe = scroller.getBoundingClientRect().top + scroller.clientHeight * 0.25;
      let current = openTabs[0] || FILES[0].id;
      for (const id of openTabs) {
        const el = document.getElementById(`file-${id}`);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, [openTabs]);

  const activeFile = useMemo(
    () => FILES.find((f) => f.id === activeId) || FILES[0],
    [activeId],
  );

  const value = {
    files: FILES,
    openTabs,
    activeId,
    activeFile,
    openFile,
    closeTab,
    reopenAll,
    sidebarOpen,
    setSidebarOpen,
    toggleSidebar,
    terminalOpen,
    setTerminalOpen,
    toggleTerminal,
    paletteOpen,
    setPaletteOpen,
    togglePalette,
    scrollerRef,
  };

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}

export function useWorkspace() {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) throw new Error('useWorkspace must be used within WorkspaceProvider');
  return ctx;
}