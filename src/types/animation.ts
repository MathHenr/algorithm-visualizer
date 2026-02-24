export type AnimationStep =
  | {
      type: "VISIT" | "FOUND";
      payload: { index: number };
      message: string;
    }
  | {
      type: "COMPARE";
      payload: { from: number; to: number };
      message: string;
    }
  | {
      type: "ERRORS";
      payload: null;
      message: string;
    };

export interface Simulate<T> {
  finalState: T;
  steps: AnimationStep[];
}
