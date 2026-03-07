import { Wrapper } from "@/components/Wrapper";

export function Content() {
  return (
    <Wrapper className="flex-col justify-center gap-4 p-4">
      <h1 className="font-extrabold text-3xl text-slate-900/80 sm:text-4xl">
        Stack
      </h1>
      <div className="space-y-2 text-slate-800">
        <p>Here I explain stack structure.</p>
        <span>Maybe talk about the efficiency</span>
        <p>Finish here.</p>
      </div>
    </Wrapper>
  );
}
