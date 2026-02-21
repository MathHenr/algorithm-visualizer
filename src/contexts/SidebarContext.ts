"use client";

import { createContext } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarInitialState = {
  isOpen: false,
  setIsOpen: () => {},
};

export const SidebarContext =
  createContext<SidebarContextType>(SidebarInitialState);
