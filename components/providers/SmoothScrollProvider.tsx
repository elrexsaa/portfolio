'use client';

import { ReactNode, createContext, useContext } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Lenis from '@studio-freight/lenis';

const SmoothScrollContext = createContext<React.RefObject<Lenis | null> | null>(null);

export function useLenis() {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error('useLenis must be used within SmoothScrollProvider');
  }
  return context;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useSmoothScroll();

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
