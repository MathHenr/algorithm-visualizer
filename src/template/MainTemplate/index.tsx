import clsx from "clsx";

import { Content } from "@/components/Content";
import { Sidebar } from "@/components/Sidebar";
import { SidebarContextProvider } from "@/providers/SidebarContextProvider";

type MainTemplateProp = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProp) {
  return (
    <SidebarContextProvider>
      <div
        className={clsx("flex overflow-hidden w-full h-screen bg-slate-200")}
      >
        <Sidebar />
        <Content>{children}</Content>
      </div>
    </SidebarContextProvider>
  );
}
