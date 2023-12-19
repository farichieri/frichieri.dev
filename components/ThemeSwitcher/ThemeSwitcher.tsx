import { FC } from "react";
import { Theme } from "@/types";
import { useTheme } from "next-themes";
import Image from "next/image";

interface Props {
  isMenu?: boolean;
}

const ThemeSwitcher: FC<Props> = ({ isMenu }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme(Theme.light);
    } else {
      setTheme(Theme.dark);
    }
  };

  if (!theme) return <></>;

  if (isMenu) {
    return (
      <div
        onClick={toggleTheme}
        className="flex h-14 w-full items-center justify-center gap-2 font-semibold hover:bg-slate-500/10"
      >
        <span className="text-base">Theme</span>
        <button
          className="ml-auto flex items-center justify-between gap-1 transition-all"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Image alt="dark" src={"/images/dark.png"} width={20} height={20} />
          ) : (
            <Image
              alt="light"
              src={"/images/light.png"}
              width={20}
              height={20}
            />
          )}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="ml-auto flex items-center justify-between gap-1 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Image alt="dark" src={"/images/dark.png"} width={20} height={20} />
      ) : (
        <Image alt="light" src={"/images/light.png"} width={20} height={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
