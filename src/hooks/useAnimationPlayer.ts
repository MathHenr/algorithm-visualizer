import { AnimationStep } from "@/types/animation";
import { useCallback, useState } from "react";

export function useAnimationPlayer() {
  const [currentStep, setCurrentStep] = useState<AnimationStep | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(
    async (steps: AnimationStep[], speed: number = 800) => {
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
