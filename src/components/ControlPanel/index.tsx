import { AnimationStep } from "@/types/animation";
import { motion } from "framer-motion";

interface ControlPanelProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputIndex: string;
  setInputIndex: React.Dispatch<React.SetStateAction<string>>;
  isPlaying: boolean;
  currentStep: AnimationStep | null;
  handleUpdate: () => void;
  handleSearch: () => void;
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
}: ControlPanelProps) {
  return (
    <section className="flex flex-col gap-4 items-center p-3 border border-slate-300/50 shadow-lg rounded">
      <div className="text-base/relaxed font-bold">
        <div className="py-2 text-slate-900/80 font-bold">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {currentStep?.message || "Waiting command ..."}
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col bg-red-400 gap-4 border-t-2 border-slate-800/50 py-4">
        <div className="space-y-4">
          <label htmlFor="valor">Valor:</label>
          <input
            id="valor"
            name="valor"
            type="number"
            value={inputValue}
            placeholder="Valor"
            onChange={(e) => setInputValue(e.target.value)}
            className="w-[80%] border-2 rounded-lg border-slate-900/80 px-2 outline-0"
          />
          <label htmlFor="index">Índice</label>
          <input
            id="index"
            name="index"
            type="number"
            value={inputIndex}
            placeholder="Índice"
            onChange={(e) => setInputIndex(e.target.value)}
            className="w-[80%] border-2 rounded-lg border-slate-900/80 px-2 outline-0"
          />
        </div>
        <div className="space-x-4">
          <button
            className="p-2 rounded bg-slate-400 text-slate-900"
            onClick={handleUpdate}
            disabled={isPlaying}
          >
            Inserir
          </button>
          <button
            className="p-2 rounded bg-slate-400 text-slate-900"
            onClick={handleSearch}
            disabled={isPlaying}
          >
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}
