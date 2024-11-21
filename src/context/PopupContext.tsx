"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface PopupContextType {
  isOpen: boolean;
  content: ReactNode;
  openPopup: (content: ReactNode) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openPopup = (content: ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setContent(null);
    setIsOpen(false);
  };

  return <PopupContext.Provider value={{ isOpen, content, openPopup, closePopup }}>{children}</PopupContext.Provider>;
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
