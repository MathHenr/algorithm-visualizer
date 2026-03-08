type ButtonProps = {
  handle: () => void;
  children: React.ReactNode;
} & React.ComponentProps<"button">;

export function Button({ handle, children, ...rest }: ButtonProps) {
  return (
    <button
      className="py-2 px-4 sm:w-fit rounded font-bold bg-slate-800 text-slate-100/80 cursor-pointer transition hover:bg-slate-400/80 hover:shadow-md hover:text-slate-800 disabled:bg-slate-800/20 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:text-slate-100/80"
      onClick={handle}
      {...rest}
    >
      {children}
    </button>
  );
}
