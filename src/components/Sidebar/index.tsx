"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const structures = [
    { name: "Homepage", href: "/", icon: "📃" },
    { name: "Array", href: "/structure/array", icon: "[ ]" },
    { name: "Stack", href: "/structure/stack", icon: "📚" },
    { name: "Queue", href: "/structure/queue", icon: "🚶" },
    { name: "Deque", href: "/structure/double-ended-queue", icon: "↔️" },
  ];

  return (
    <aside
      className={clsx(
        "min-h-screen bg-slate-800 relative flex flex-col items-center p-10 text-slate-100 transition",
        "sm:p-4 sm:rounded-tr-lg sm:rounded-br-lg",
        isOpen ? "w-full sm:w-[60%] sm:max-w-75" : "sm:w-20 w-10",
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
            <h1
              className={clsx("font-extrabold text-2xl/tight", "sm:text-3xl")}
            >
              Algorithm Visualizer
            </h1>
            <a href="#" className={clsx("text-lg mb-4")}>
              By Matheus
            </a>
          </>
        )}

        {!isOpen && <span className={clsx("mb-4")}>Logo</span>}
      </div>

      <nav
        className={clsx(
          "flex flex-col gap-3 w-full min-h-[60vh] font-bold text-xl text-center mb-8",
          "sm:text-lg sm:font-normal",
        )}
      >
        {/* Sidebar opened */}
        {structures.map((item) => {
          const { name, href, icon } = item;

          return (
            <Link
              key={href}
              className={clsx(
                "hover:bg-slate-300 hover:shadow-[0px_3px_15px_-1px_rgba(0,0,0,0.50)] hover:text-slate-900",
                "rounded-sm transition flex items-center justify-center gap-4 group",
                isOpen ? "" : "sm:px-4 sm:py-2",
              )}
              href={href}
            >
              <span>{icon} </span>
              {isOpen && <span> {name}</span>}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "w-fit px-4 py-2 rounded-xl text-xl transition cursor-pointer",
          "hover:bg-slate-300 hover:text-slate-900",
        )}
      >
        {isOpen ? <>X</> : <>O</>}
      </button>
    </aside>
  );
}
