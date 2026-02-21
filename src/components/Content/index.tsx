import clsx from "clsx";

type ContentProp = {
  children: React.ReactNode;
};

export function Content({ children }: ContentProp) {
  return (
    <div
      className={clsx(
        "flex-1 h-full flex p-10 text-salte-900 overflow-y-auto overflow-x-hidden transition-all ease-in-out duration-5000",
      )}
    >
      <div className={clsx("max-w-7xl mx-auto")}> {children} </div>
    </div>
  );
}
