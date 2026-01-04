'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface CommunityFormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const CommunityFormContext = createContext<CommunityFormContextType | undefined>(undefined);

export const CommunityFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CommunityFormContext.Provider
      value={{
        isOpen,
        openForm: () => setIsOpen(true),
        closeForm: () => setIsOpen(false),
      }}
    >
      {children}
    </CommunityFormContext.Provider>
  );
};

export const useCommunityForm = () => {
  const context = useContext(CommunityFormContext);
  if (!context) {
    throw new Error('useCommunityForm must be used within CommunityFormProvider');
  }
  return context;
};
