export function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="size-12s border-border bg-background/50 font-mono text-foreground fixed bottom-2 left-2 z-50 flex items-center justify-center rounded-full border-2 p-2 text-xs tracking-tighter backdrop-blur-sm ">
      &nbsp;
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:max-md:block">sm</div>
      <div className="hidden md:max-lg:block">md</div>
      <div className="hidden lg:max-xl:block">lg</div>
      <div className="hidden xl:max-2xl:block">xl</div>
      <div className="hidden 2xl:block">2xl</div>
      &nbsp;
    </div>
  );
}
