interface ButtonProps {
  handle: () => void;
  isPlaying: boolean;
  children: React.ReactNode;
}

export function Button({ handle, isPlaying, children }: ButtonProps) {
  return (
    <button
      className="py-2 px-4 sm:w-fit rounded font-bold bg-slate-800 text-slate-100/80 hover:bg-slate-400/80 hover:shadow-md hover:text-slate-800"
      onClick={handle}
      disabled={isPlaying}
    >
      {children}
    </button>
  );
}
