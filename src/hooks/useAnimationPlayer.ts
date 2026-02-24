import { AnimationStep } from "@/types/animation";
import { useCallback, useState } from "react";

export function useAnimationPlayer<T>() {
  const [currentStep, setCurrentStep] = useState<AnimationStep<T> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(
    async (steps: AnimationStep<T>[], speed: number = 800) => {
      setIsPlaying(true);
      for (const step of steps) {
        setCurrentStep(step);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      setIsPlaying(false);
    },
    [],
  );

  return { currentStep, isPlaying, play };
}
