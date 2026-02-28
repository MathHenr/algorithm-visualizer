import { AnimationStep } from "@/types/animation";
import { motion } from "framer-motion";
import { Input } from "../Input";
import { Button } from "../Button";

interface ControlPanelProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputIndex: string;
  setInputIndex: React.Dispatch<React.SetStateAction<string>>;
  isPlaying: boolean;
  currentStep: AnimationStep | null;
  handleUpdate: () => void;
  handleSearch: () => void;
  handleDelete: () => void;
}

export function ControlPanel({
  inputIndex,
  setInputIndex,
  inputValue,
  setInputValue,
  isPlaying,
  currentStep,
  handleSearch,
  handleUpdate,
  handleDelete,
}: ControlPanelProps) {
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
