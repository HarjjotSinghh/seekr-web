import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-foreground absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:rotate-12 lg:static"
    >
      <MoonIcon className="size-6 dark:hidden" />
      <SunIcon className="hidden size-6 dark:block" />
    </button>
  );
};

export default ThemeToggler;
