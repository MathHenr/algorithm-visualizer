import { SidebarContext } from "@/contexts/SidebarContext";
import { useState } from "react";

type SidebarContextProviderProp = {
  children: React.ReactNode;
};

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProp) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
