import { AnimationStep } from "@/types/animation";

export class Stack<T> {
  #items: (T | null)[];

  private constructor(size: number) {
    this.#items = new Array(size).fill(null);
  }

  // future methods
  peek(): AnimationStep[] {
    const steps: AnimationStep[] = [];

    steps.push({
      type: "VISIT",
      payload: { index: this.#items.length - 1 },
      message: "Pegando o elemento do topo da pilha.",
    });

    return steps;
  }

  pop(): AnimationStep[] {
    const steps: AnimationStep[] = [];

    if (this.#items.length < 1) {
      steps.push({
        type: "ERRORS",
        payload: null,
        message: "A pilha está vazia.",
      });
      return steps;
    }

    // Salvando eliminação no array de animação
    steps.push({
      type: "FOUND",
      payload: { index: this.#items.length - 1 },
      message: `Removendo o item do topo: ${this.#items[this.#items.length - 1]}`,
    });

    // Removendo o último elemento
    this.#items.pop();

    return steps;
  }

  push(value: T): AnimationStep[] {
    const steps: AnimationStep[] = [];

    steps.push({
      type: "VISIT",
      payload: { index: this.#items.length },
      message: `Inserindo o valor ${value} no topo da pilha`,
    });

    this.#items.push();

    return steps;
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
