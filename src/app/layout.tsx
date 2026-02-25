import type { Metadata } from "next";
import "./globals.css";
import { MainTemplate } from "@/template/MainTemplate";

export const metadata: Metadata = {
  title: "Algorithm Visualizer",
  description: "A project to visualize data-structures and algorithms.",
};

type RootLayoutProp = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProp>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
