import clsx from "clsx";

type WrapperProp = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

export function Wrapper({ children, className, ...rest }: WrapperProp) {
  return (
    <div
      className={clsx(
        "flex border border-slate-300/50 shadow-lg rounded",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
