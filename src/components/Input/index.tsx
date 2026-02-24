type InputProps = {
  value: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
} & React.ComponentProps<"input">;

export function Input({ value, changeValue, children, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor="valor">{children}</label>
      <input
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        className="sm:w-[60%] w-full border-2 rounded-lg border-slate-900/80 px-2 outline-0"
        {...rest}
      />
    </>
  );
}
