"use client";

import { useSidebar } from "@/hooks/useSidebar";
import clsx from "clsx";

type ContentProp = {
  children: React.ReactNode;
};

export function Content({ children }: ContentProp) {
  const { isOpen } = useSidebar();

  return (
    <div
      className={clsx(
        "flex-1 h-full p-2 sm:p-10 overflow-y-auto overflow-x-hidden transition-all ease-in-out duration-300",
        isOpen ? "max-sm:hidden" : "flex",
      )}
    >
      <div className={clsx("max-w-60 sm:max-w-2xl lg:max-w-7xl mx-auto")}>
        {children}
      </div>
    </div>
  );
}
