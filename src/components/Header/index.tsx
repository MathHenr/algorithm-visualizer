import clsx from "clsx";

type HeaderProp = {
  title: string;
  subTitle: string;
} & React.ComponentProps<"header">;

export function Header({ title, subTitle, className, ...rest }: HeaderProp) {
  return (
    <header
      className={clsx("flex flex-col max-sm:items-center", className)}
      {...rest}
    >
      <h2 className="font-bold text-xl sm:text-3xl text-slate-900/80">
        {title}
      </h2>
      <p className="text-slate-800/80 text-sm sm:text-base">{subTitle}</p>
    </header>
  );
}
