export class Stack<T> {
  #items: (T | null)[];

  private constructor(size: number) {
    this.#items = new Array(size).fill(null);
  }

  // future methods
  peek() {}

  pop() {}

  push() {}

  isEmpty() {}

  clear() {}

  size() {}
}
