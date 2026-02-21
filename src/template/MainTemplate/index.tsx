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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            provident earum voluptate, fugit expedita ratione, atque, recusandae
            illo assumenda repellendus suscipit quas? Ea ad deleniti, aperiam at
            quae illum corrupti!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde provident earum voluptate, fugit expedita
            ratione, atque, recusandae illo assumenda repellendus suscipit quas?
            Ea ad deleniti, aperiam at quae illum corrupti!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Unde provident earum voluptate,
            fugit expedita ratione, atque, recusandae illo assumenda repellendus
            suscipit quas? Ea ad deleniti, aperiam at quae illum corrupti!Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Unde provident
            earum voluptate, fugit expedita ratione, atque, recusandae illo
            assumenda repellendus suscipit quas? Ea ad deleniti, aperiam at quae
            illum corrupti!Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Unde provident earum voluptate, fugit expedita ratione, atque,
            recusandae illo assumenda repellendus suscipit quas? Ea ad deleniti,
            aperiam at quae illum corrupti!
          </p>
        </Content>
      </div>
    </SidebarContextProvider>
  );
}
