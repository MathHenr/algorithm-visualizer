"use client";

import Link from "next/link";
import { useSidebar } from "@/hooks/useSidebar";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  BracketsIcon,
  LayersIcon,
  LayoutPanelLeftIcon,
  ListOrderedIcon,
  MoveHorizontalIcon,
  PyramidIcon,
  X,
} from "lucide-react";

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar();
  const pathname = usePathname();

  const structures = [
    {
      name: "Homepage",
      href: "/",
      icon: <LayoutPanelLeftIcon />,
    },
    { name: "Array", href: "/array", icon: <BracketsIcon /> },
    { name: "Stack", href: "/stack", icon: <LayersIcon /> },
    { name: "Queue", href: "/queue", icon: <ListOrderedIcon /> },
    {
      name: "Deque",
      href: "/double-ended-queue",
      icon: <MoveHorizontalIcon />,
    },
  ];

  return (
    <aside
      className={clsx(
        "min-h-screen relative flex flex-col items-center bg-slate-800 text-slate-100",
        "duration-300 ease-in-out transition-all overflow-hidden",
        isOpen
          ? "w-full p-10 sm:w-64 sm:p-4 sm:rounded-tr-lg sm:rounded-br-lg"
          : "w-20 p-2 sm:p-4 rounded-tr-lg rounded-br-lg",
      )}
    >
      <div
        className={clsx(
          "flex flex-col gap-2 p-2 items-center mb-12 border-b border-b-slate-200",
        )}
      >
        <span className={clsx(!isOpen && "h-full flex items-center")}>
          <PyramidIcon
            onClick={() => setIsOpen(true)}
            className={clsx(
              "w-6 h-6 mx-auto transition",
              !isOpen && "hover:text-slate-200/80 cursor-pointer",
            )}
          />
        </span>

        <h2
          className={clsx(
            isOpen ? "text-center font-extrabold text-2xl" : "hidden",
          )}
        >
          Data Structure Visualizer
        </h2>
        <Link href="#" className={clsx("mb-2", isOpen ? "block" : "hidden")}>
          By{" "}
          <span className={clsx("hover:text-slate-50/80 transition")}>
            Matheus
          </span>
        </Link>
      </div>

      <nav
        className={clsx(
          "flex flex-col gap-3 w-full min-h-[60vh] font-bold text-xl text-center mb-8",
        )}
      >
        {/* Sidebar opened */}
        {structures.map((item) => {
          const { name, href, icon } = item;
          const isActive = pathname === item.href;

          return (
            <Link
              key={href}
              className={clsx(
                "hover:bg-slate-300 hover:shadow-[0px_3px_15px_-1px_rgba(0,0,0,0.50)] hover:text-slate-900",
                "rounded-sm transition flex items-center justify-center gap-4 px-4 py-2",
                isOpen ? "" : "sm:px-4 sm:py-2",
                isActive ? "bg-slate-300 text-slate-900" : "",
              )}
              href={href}
              title={name}
              aria-label={name}
            >
              <span className="text-sm"> {icon} </span>
              {isOpen && <span> {name}</span>}
            </Link>
          );
        })}
      </nav>

      {isOpen && (
        <X
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "w-12 h-12 p-2 rounded-lg transition cursor-pointer",
            isOpen
              ? "hover:bg-red-500/50 hover:text-slate-50 sm:w-10 sm:h-10 absolute top-0 left-0 rounded-tl-none"
              : "hover:bg-slate-50/50 hover:text-slate-900",
          )}
        />
      )}
    </aside>
  );
}
