"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Content } from "./content";
import { Header } from "@/components/Header";
import { Wrapper } from "@/components/Wrapper";
import { Stack } from "@/core/stack-structure";
import { AnimatePresence, motion } from "framer-motion";
import { ControlPanel } from "@/components/ControlPanel";
import { useAnimationPlayer } from "@/hooks/useAnimationPlayer";

export default function StackPage() {
  const [structure] = useState(new Stack<number>(0));

  // Displayed structure
  const [displayStack, setDisplayStack] = useState<(number | null)[]>([]);

  const { currentStep, isPlaying, play } = useAnimationPlayer();

  useEffect(() => {
    setDisplayStack(structure.get());
  }, [structure]);

  return (
    <Container>
      <Header
        title="Visualizador de Stack"
        subTitle="Uso do princípio LIFO (last in first out)."
      />

      {/* Here goes animation box */}
      <Wrapper className="flex flex-col-reverse items-center gap-2 ">
        <AnimatePresence>
          {displayStack.map((item, index) => {
            const isFound =
              currentStep?.type === "FOUND" &&
              currentStep?.payload.index === index;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: -20,
                  scale: isFound ? 1.1 : 1,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  backgroundColor:
                    structure.get().length - 1 === index
                      ? "#5ee9b6e8"
                      : "#cad5e2",
                }}
                exit={{
                  opacity: 0.3,
                  y: -20,
                  scale: structure.get().length - 1 === index ? 1.1 : 1,
                  backgroundColor:
                    structure.get().length - 1 === index
                      ? "red"
                      : "transparent",
                }}
                className="relative flex flex-col max-sm:w-[80%] max-sm:h-15 w-[45%] h-18 items-center justify-center border rounded shadow-2xl transition"
                title={item?.toString()}
                aria-label={item?.toString()}
              >
                {item}
                {index === displayStack.length - 1 && (
                  <span className="absolute top-0 text-xs font-bold text-slate-800/80">
                    Top
                  </span>
                )}
                {index === 0 && (
                  <span className="absolute bottom-0 text-xs font-bold text-slate-800/80">
                    Base
                  </span>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Wrapper>

      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        currentStep={currentStep}
        structure={structure}
        setDisplay={setDisplayStack}
      />
      <Content />
    </Container>
  );
}
