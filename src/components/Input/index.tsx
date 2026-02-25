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
        type="number"
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        className="sm:w-[60%] w-full border-2 border-slate-300/70 bg-slate-50 rounded py-1 px-4 outline-0 no-spinner"
        {...rest}
      />
    </>
  );
}
