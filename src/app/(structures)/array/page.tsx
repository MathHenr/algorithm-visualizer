"use client";

import { ControlPanel } from "@/components/ControlPanel";
import { ArrayStructure } from "@/core/array-structure";
import { useAnimationPlayer } from "@/hooks/useAnimationPlayer";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Content } from "./content";
import { Container } from "@/components/Container";

export default function Array() {
  const [structure] = useState(new ArrayStructure<number>(0));

  const [inputValue, setInputValue] = useState("");
  const [inputIndex, setInputIndex] = useState("");

  const [displayArray, setDisplayArray] = useState<(number | null)[]>([]);

  const { currentStep, isPlaying, play } = useAnimationPlayer();

  useEffect(() => {
    setDisplayArray(structure.get());
  }, [structure]);

  function handleUpdate() {
    const val = parseInt(inputValue);
    const idx = parseInt(inputIndex) || structure.get().length;

    if (isNaN(val) || isNaN(idx)) return;

    const newArray = structure.update(idx, val);
    setDisplayArray(newArray);
    return;
  }

  async function handleSearch() {
    const val = parseInt(inputValue);

    if (isNaN(val)) return;

    const steps = structure.find(val);
    await play(steps, 500);
  }

  function handleDelete() {
    const idx = parseInt(inputIndex);

    if (isNaN(idx)) return;

    const newArray = structure.delete(idx);
    setDisplayArray(newArray);
  }

  return (
    <div className="w-full sm:max-w-4xl sm:min-w-lg mx-auto space-y-12 py-8">
      <Content />
      <header className="flex flex-col max-sm:items-center">
        <h2 className="font-bold text-xl sm:text-3xl text-slate-900/80">
          Visualizador de Array
        </h2>
        <p className="text-slate-800/80 text-sm sm:text-base">
          A estrutura de dados mais simples.
        </p>
      </header>

      <Container className="flex flex-wrap w-full justify-center gap-4 p-8 border border-slate-300/50 shadow-lg rounded">
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
              initial={{ opacity: 0, x: 5 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: isFound || isVisiting ? 1.05 : 1,
                backgroundColor: isFound
                  ? "#5ee9b6e8"
                  : isVisiting
                    ? "#fff185e8"
                    : "#cad5e2",
              }}
              className="relative flex flex-col max-sm:w-15 max-sm:h-15 w-18 h-18 items-center justify-center border rounded shadow-2xl overflow-hidden transition"
              title={item?.toString()}
              aria-label={item?.toString()}
            >
              <span className="absolute top-1 text-[10px] font-bold text-red-700/80">
                index: {index}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={clsx(
                    "text-lg",
                    isFound
                      ? "text-slate-900/80 font-extrabold"
                      : isVisiting
                        ? "text-slate-800/80 font-bold"
                        : "text-slate-900",
                  )}
                >
                  {item ?? "-"}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          );
        })}
      </Container>

      <ControlPanel
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputIndex={inputIndex}
        setInputIndex={setInputIndex}
        isPlaying={isPlaying}
        currentStep={currentStep}
        handleUpdate={handleUpdate}
        handleSearch={handleSearch}
        handleDelete={handleDelete}
      />
    </div>
  );
}
