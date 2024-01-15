import { FC } from "react";
import Link from "next/link";

import ThemeSwitcher from "./ThemeSwitcher";
import { myPages } from "@/utils/myPages";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const MobileNav: FC<Props> = ({ isOpen, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`${
          isOpen
            ? "fixed inset-0 right-0 h-screen w-screen bg-black/50 sm:hidden"
            : "right-full"
        } transition-all duration-300`}
      ></div>
      <div
        className={`${
          isOpen ? "right-0" : "right-full"
        } fixed top-0 z-[90] flex h-auto w-full flex-col items-center bg-white px-4 pt-[var(--navHeight)] text-[var(--textColor)] shadow-sm transition-all duration-300 dark:bg-black dark:shadow-cyan-100/20 md:hidden `}
      >
        <div className="flex w-full flex-col items-center justify-center gap-10 border-t border-b text-base font-semibold">
          <div className="flex w-full flex-col divide-y ">
            {myPages.map((page) => (
              <Link
                href={page.path}
                key={page.name}
                className="flex h-14 w-full items-center duration-300 hover:bg-slate-500/10 hover:opacity-100"
                onClick={onClick}
              >
                <span className="text-[var(--textColor)]">{page.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <a
          className="flex w-full justify-between border-b py-3 font-semibold duration-300 hover:bg-slate-500/10 hover:opacity-100"
          href="mailto:frichieri.dev@gmail.com"
        >
          <span className="text-base text-[var(--textColor)] ">Contact</span>
        </a>
        <ThemeSwitcher isMenu={true} />
      </div>
    </>
  );
};

export default MobileNav;
