export interface AnimationStep {
  type: "VISIT" | "COMPARE" | "FOUND" | "ERRORS";
  payload: unknown;
  message: string;
}

export interface Simulate<T> {
  finalState: T;
  steps: AnimationStep[];
}
