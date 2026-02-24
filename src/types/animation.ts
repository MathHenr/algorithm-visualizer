export interface AnimationStep<T> {
  type: "VISIT" | "COMPARE" | "FOUND" | "ERRORS";
  payload:
    | { index: number }
    | { value: T; index?: number }
    | { from: number; to: number }
    | null;
  message: string;
}

export interface Simulate<T> {
  finalState: T;
  steps: AnimationStep<T>[];
}
