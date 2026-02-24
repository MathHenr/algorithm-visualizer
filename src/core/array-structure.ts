import { AnimationStep } from "@/types/animation";

export class ArrayStructure<T> {
  private items: Array<T | null>;

  constructor(size: number) {
    this.items = new Array(size).fill(null);
  }

  // Implementing a visual linear search
  find(value: T): { steps: AnimationStep[] } {
    const steps: AnimationStep[] = [];

    for (let i = 0; i < this.items.length; i++) {
      steps.push({
        type: "VISIT",
        payload: { index: i },
        message: `Checking index ${i}`,
      });

      if (this.items[i] === value) {
        steps.push({
          type: "FOUND",
          payload: { index: i },
          message: `Value found at index ${i}`,
        });

        return { steps };
      }
    }
    steps.push({ type: "ERRORS", payload: null, message: "Value not found" });
    return { steps };
  }

  update(index: number, value: T) {
    this.items[index] = value;
    return [...this.items];
  }

  get() {
    return [...this.items];
  }
}
