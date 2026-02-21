"use client";

import Link from "next/link";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const structures = [
    {
      name: "Homepage",
      href: "/",
      icon: <LayoutPanelLeftIcon />,
    },
    { name: "Array", href: "/structure/array", icon: <BracketsIcon /> },
    { name: "Stack", href: "/structure/stack", icon: <LayersIcon /> },
    { name: "Queue", href: "/structure/queue", icon: <ListOrderedIcon /> },
    {
      name: "Deque",
      href: "/structure/double-ended-queue",
      icon: <MoveHorizontalIcon />,
    },
  ];

  return (
    <aside
      className={clsx(
        "bg-slate-800 min-h-screen relative flex flex-col items-center text-slate-100",
        "duration-300 ease-in-out transition-all overflow-y-auto",
        isOpen
          ? "w-fit p-10 sm:p-4 sm:max-w-75 sm:rounded-tr-lg sm:rounded-br-lg"
          : "w-fit p-2 sm:w-20 rounded-tr-lg rounded-br-lg",
      )}
    >
      <div
        className={clsx(
          "flex flex-col gap-4 text-center mb-16 border-b border-b-slate-200",
          "sm:w-fit",
          isOpen ? "" : "h-24 justify-center",
        )}
      >
        {isOpen && (
          <>
            <span className={clsx("flex justify-center")}>
              <PyramidIcon size={20} />
            </span>
            <h2 className={clsx("font-extrabold text-2xl/tight", "sm:text-xl")}>
              Algorithm Visualizer
            </h2>
            <Link href="#" className={clsx("mb-2")}>
              By{" "}
              <span className={clsx("hover:text-slate-50/80 transition")}>
                Matheus
              </span>
            </Link>
          </>
        )}

        {!isOpen && (
          <span className={clsx("text-center")}>
            <PyramidIcon
              onClick={() => setIsOpen(!isOpen)}
              size={24}
              className="cursor-pointer hover:text-slate-200/80 transition"
            />
          </span>
        )}
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
