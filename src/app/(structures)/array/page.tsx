"use client";

import { ArrayStructure } from "@/core/array-structure";
import { useAnimationPlayer } from "@/hooks/useAnimationPlayer";
import { useState } from "react";

export default function Array() {
  const [structure] = useState(new ArrayStructure<number>(5));

  const [displayArray, setDisplayArray] = useState<(number | null)[]>([]);

  const { currentStep, isPlaying, play } = useAnimationPlayer();

  return (
    <div className="flex">
      <p className="text-red-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        accusamus architecto vitae nam aliquam harum laudantium! Minima esse
        accusamus, tempore magnam incidunt obcaecati quisquam. Dolores earum
        voluptates eum eligendi omnis.
      </p>
    </div>
  );
}
