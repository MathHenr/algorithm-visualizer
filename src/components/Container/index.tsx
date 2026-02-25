import clsx from "clsx";

type ContainerProp = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

export function Container({ children, ...rest }: ContainerProp) {
  return (
    <div
      className={clsx(
        "flex border border-slate-300/50 shadow-lg rounded",
        rest.className,
      )}
    >
      {children}
    </div>
  );
}
