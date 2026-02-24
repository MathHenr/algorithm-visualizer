"use client";

import { ArrayStructure } from "@/core/array-structure";
import { useAnimationPlayer } from "@/hooks/useAnimationPlayer";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Array() {
  const [structure] = useState(new ArrayStructure<number>(5));

  const [inputValue, setInputValue] = useState("");
  const [inputIndex, setInputIndex] = useState("");

  const [displayArray, setDisplayArray] = useState<(number | null)[]>([
    1,
    2,
    3,
    4,
    4,
    3,
    4,
    4,
    3,
    4,
    4,
    3,
    4,
    4,
    null,
  ]);

  const { currentStep, isPlaying, play } = useAnimationPlayer();

  async function handleSearch() {
    const val = parseInt(inputValue);

    if (isNaN(val)) return;

    await play(steps);
  }

  return (
    <div className="w-full sm:max-w-4xl mx-auto space-y-12 py-8">
      <header className="flex flex-col items-center">
        <h2 className="font-bold text-xl sm:text-3xl text-slate-900">
          Visualizador de Array
        </h2>
        <p className="text-slate-800 text-sm sm:text-base">
          A estrutura de dados mais simples.
        </p>
      </header>

      <div className="flex flex-wrap w-full justify-center gap-4 p-8 border border-slate-300/50 shadow-lg rounded">
        {displayArray.map((item, index) => {
          const isVisiting =
            currentStep?.type === "VISIT" &&
            currentStep.payload.index === index;
          const isFound =
            currentStep?.type === "FOUND" &&
            currentStep.payload.index === index;

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                backgroundColor: isVisiting
                  ? "yellow"
                  : isFound
                    ? "green"
                    : "transparent",
              }}
              className={clsx(
                "relative flex flex-col max-sm:w-15 max-sm:h-15 w-18 h-18 items-center justify-center border-2 rounded shadow-2xl",
              )}
            >
              <span className="absolute top-1 text-[10px] font-bold text-slate-900/80">
                index: {index}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-bold text-slate-900/80"
                >
                  {item ?? "-"}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <section>
        <div>
          <div>
            <input
              type="number"
              value={inputValue}
              placeholder="Valor"
              className="w-[80%] border-2 rounded-lg border-slate-900/80 px-2 outline-0"
            />
            <input
              type="number"
              value={inputIndex}
              placeholder="Índice"
              className="w-[80%] border-2 rounded-lg border-slate-900/80 px-2 outline-0"
            />
          </div>
          <div>
            <button onClick={handleSearch} disabled={isPlaying}>
              Buscar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
