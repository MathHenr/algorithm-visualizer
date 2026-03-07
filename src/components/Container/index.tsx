type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full sm:max-w-4xl sm:min-w-lg mx-auto space-y-12 py-8">
      {children}
    </div>
  );
}
