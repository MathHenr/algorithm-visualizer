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
    this.#items.pop();
    return [...this.#items];
  }

  push(value: T) {
    this.#items.push(value);
    return [...this.#items];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  clear() {
    while (this.#items.length > 1) {
      this.pop();
    }
    return;
  }

  size() {
    return this.#items.length;
  }
}
