import { AnimationStep } from "@/types/animation";

export class Stack<T> {
  #items: (T | null)[];

  constructor(size: number) {
    this.#items = new Array(size).fill(null);
  }

  peek() {
    const steps: AnimationStep[] = [];

    steps.push({
      type: "VISIT",
      payload: { index: this.#items.length - 1 },
      message: "Peeking value at the top of the stack.",
    });

    return { steps, items: this.#items[this.#items.length - 1] };
  }

  pop() {
    const steps: AnimationStep[] = [];

    if (this.#items.length < 1) {
      steps.push({
        type: "ERRORS",
        payload: null,
        message: "Stack is already empty.",
      });
      return { steps, items: [...this.#items] };
    }

    steps.push({
      type: "FOUND",
      payload: { index: this.#items.length - 1 },
      message: `Removed value at the top of the stack: ${this.#items[this.#items.length - 1]}`,
    });

    this.#items.pop();

    return { steps, items: [...this.#items] };
  }

  push(value: T) {
    const steps: AnimationStep[] = [];

    steps.push({
      type: "VISIT",
      payload: { index: this.#items.length },
      message: `Pushing value ${value} at the top.`,
    });

    this.#items.push(value);

    return { steps, items: [...this.#items] };
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  clear() {
    this.#items = [];
    return;
  }

  size() {
    return this.#items.length;
  }

  get() {
    return [...this.#items];
  }
}
