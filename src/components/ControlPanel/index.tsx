import { useState } from "react";
import { AnimationStep } from "@/types/animation";
import { motion } from "framer-motion";
import { Input } from "../Input";
import { Button } from "../Button";
import { ArrayStructure } from "@/core/array-structure";
import { Stack } from "@/core/stack-structure";

interface ControlPanelProps {
  play: (steps: AnimationStep[], speed: number) => Promise<void>;
  isPlaying: boolean;
  currentStep: AnimationStep | null;
  structure: ArrayStructure<number> | Stack<number>;
  setDisplay: React.Dispatch<React.SetStateAction<(number | null)[]>>;
}

export function ControlPanel({
  play,
  isPlaying,
  currentStep,
  structure,
  setDisplay,
}: ControlPanelProps) {
  const [inputValue, setInputValue] = useState("");
  const [inputIndex, setInputIndex] = useState("");

  async function handleUpdate() {
    const val = parseInt(inputValue);

    if (isNaN(val)) return;

    switch (true) {
      case structure instanceof ArrayStructure: {
        const parsedIdx = parseInt(inputIndex);
        const idx = isNaN(parsedIdx) ? structure.get().length : parsedIdx;
        setDisplay(structure.setAt(idx, val));
        return;
      }
      case structure instanceof Stack: {
        const { steps, items } = structure.push(val);
        setDisplay(items);
        await play(steps, 1000);
        return;
      }
    }
  }

  async function handleSearch() {
    const val = parseInt(inputValue);

    if (isNaN(val)) return;

    switch (true) {
      case structure instanceof ArrayStructure: {
        const steps = structure.find(val);
        await play(steps, 500);
      }
    }
  }

  async function handleDelete() {
    switch (true) {
      case structure instanceof ArrayStructure: {
        const idx = parseInt(inputIndex);
        if (isNaN(idx)) return;
        setDisplay(structure.removeAt(idx));
        return;
      }
      case structure instanceof Stack: {
        const { steps, items } = structure.pop();
        if (items.length < 1) {
          setDisplay([]);
          await play(steps, 1000);
          return;
        }
        setDisplay(items);
        await play(steps, 1000);
        return;
      }
    }
  }

  return (
    <section className="flex flex-col gap-4 items-center p-3 border border-slate-300/50 shadow-lg rounded">
      <div className="text-base/relaxed font-bold">
        <div className="py-2 text-slate-900/80 font-bold">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              color:
                currentStep?.type === "ERRORS"
                  ? "#82181a"
                  : currentStep?.type === "FOUND"
                    ? "#016630"
                    : "#0f172b",
            }}
          >
            {currentStep?.message || "Aguardando comando ..."}
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 border-t-2 border-slate-800/50 py-4">
        <div className="flex flex-col w-full gap-4">
          <span className="flex max-sm:flex-col sm:justify-center sm:items-center sm:gap-4">
            <Input
              id="value"
              name="value"
              type="number"
              placeholder="valor"
              value={inputValue}
              changeValue={setInputValue}
            >
              Valor:
            </Input>
          </span>
          <span className="flex max-sm:flex-col sm:justify-center sm:items-center sm:gap-2">
            <Input
              id="index"
              name="index"
              type="number"
              placeholder="índice"
              value={inputIndex}
              changeValue={setInputIndex}
            >
              Índice:
            </Input>
          </span>
        </div>

        <div className="flex max-sm:flex-col sm:justify-center gap-4">
          <Button handle={handleUpdate} isPlaying={isPlaying}>
            Inserir valor
          </Button>
          <Button handle={handleSearch} isPlaying={isPlaying}>
            Buscar valor
          </Button>
          <Button handle={handleDelete} isPlaying={isPlaying}>
            Deletar índice
          </Button>
        </div>
      </div>
    </section>
  );
}
