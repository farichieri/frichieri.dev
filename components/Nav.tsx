import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";

import { myPages } from "@/utils/myPages";
import MobileNav from "./MobileNav";

const ThemeSwitcher = dynamic(() => import("@/components/ThemeSwitcher"), {
  ssr: false,
});

interface Props {}

const Nav: FC<Props> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastYPos(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastYPos]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const genericHamburgerLine = `h-0.5 w-6 my-0.5 rounded-full bg-black dark:bg-white transition ease transform duration-300`;

  return (
    <>
      <nav
        className={`fixed left-1/2 z-[100] flex w-full -translate-x-1/2 select-none items-center justify-center overflow-auto border-gray-500/20 px-2 backdrop-blur-md duration-300 dark:border-gray-400/10 sm:top-2 sm:max-w-2xl sm:overflow-auto sm:rounded-full sm:px-8   ${
          show
            ? "border-b bg-white/70 dark:bg-black/50"
            : "border-none bg-transparent"
        }`}
      >
        <div
          className={`z-[100] flex h-[var(--navHeight)] w-full max-w-7xl items-center justify-between gap-4 border-gray-500/20 px-2 dark:border-gray-400/10`}
        >
          <div className="z-[100]">
            <Link href={"/"}>
              <span className="font-bold text-blue-400">FR</span>
            </Link>
          </div>
          <div className="hidden  items-center justify-center gap-4 text-xs font-medium sm:text-base md:flex md:gap-0">
            {myPages.map((page) => (
              <Link
                href={page.path}
                key={page.name}
                className={`rounded-3xl px-3 py-1 text-sm duration-300 hover:opacity-100 ${
                  router.asPath === page.path ? "opacity-100" : "opacity-50"
                }`}
              >
                <span className="text-[var(--textColor)]">{page.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex w-fit min-w-fit  items-center justify-end gap-4 text-xs xs:gap-5 sm:gap-10 sm:text-xl">
            <div className="hidden md:flex">
              <ThemeSwitcher />
            </div>
          </div>
          <div className="left-auto z-[100] cursor-pointer md:hidden">
            <button
              className="group flex h-12 w-12 flex-col items-center justify-center rounded"
              onClick={(e) => {
                e.preventDefault();
                handleMenu();
              }}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "translate-y-0 rotate-45 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />

              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "-translate-y-1.5 -rotate-45 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>
      <MobileNav onClick={handleMenu} isOpen={isOpen} />
    </>
  );
};

export default Nav;
