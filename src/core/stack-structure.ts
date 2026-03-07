export class Stack<T> {
  #items: (T | null)[];

  private constructor(size: number) {
    this.#items = new Array(size).fill(null);
  }

  // future methods
  peek() {
    return this.#items[this.#items.length - 1];
  }

  pop() {
    return this.#items.pop();
  }

  push(value: T) {
    return this.#items.push(value);
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
