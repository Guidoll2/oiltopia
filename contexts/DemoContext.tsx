'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DemoContextType {
  isOpen: boolean;
  showDemoMessage: () => void;
  closeDemoMessage: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const showDemoMessage = () => setIsOpen(true);
  const closeDemoMessage = () => setIsOpen(false);

  return (
    <DemoContext.Provider
      value={{
        isOpen,
        showDemoMessage,
        closeDemoMessage,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
}
