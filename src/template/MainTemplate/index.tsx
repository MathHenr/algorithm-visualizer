import clsx from "clsx";

import { Content } from "@/components/Content";
import { Sidebar } from "@/components/Sidebar";
import { SidebarContextProvider } from "@/providers/SidebarContextProvider";

export function MainTemplate() {
  return (
    <SidebarContextProvider>
      <div
        className={clsx("flex overflow-hidden w-full h-screen bg-slate-200")}
      >
        <Sidebar />
        <Content>
          <h1>Some content goes here</h1>
        </Content>
      </div>
    </SidebarContextProvider>
  );
}
