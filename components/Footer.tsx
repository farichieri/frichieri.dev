import { useRouter } from "next/router";
import Link from "next/link";

import { myPages } from "@/utils/myPages";
import ExternalLink from "./ExternalLink";
import { InstagramIcon, TwitterIcon, GithubIcon } from "@/assets";

const Footer = () => {
  const year = new Date().getFullYear();

  const SOCIAL = [
    {
      name: "Twitter",
      url: "https://www.twitter.com/farichieri",
      icon: (
        <TwitterIcon customClass="h-4 w-4 fill-black dark:fill-white opacity-50 hover:opacity-100 duration-300" />
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/fabriciorichieri",
      icon: (
        <InstagramIcon customClass="h-4 w-4 fill-black dark:fill-white opacity-50 hover:opacity-100 duration-300" />
      ),
    },
    {
      name: "Github",
      url: "https://github.com/farichieri",
      icon: (
        <GithubIcon customClass="h-4 w-4 fill-black dark:fill-white opacity-50 hover:opacity-100 duration-300" />
      ),
    },
  ];

  const router = useRouter();
  return (
    <footer className="mx-auto flex w-full max-w-5xl items-center justify-center border-t border-[var(--box-shadow-light)]">
      <div className="mt-auto flex w-full max-w-4xl flex-col gap-8 py-10">
        <div className="mx-auto grid grid-cols-3 gap-x-2 sm:grid-cols-5 sm:gap-x-10">
          {myPages.map((page) => {
            return (
              <Link
                href={page.path}
                key={page.name}
                className={`rounded-3xl py-1 text-sm duration-300 hover:opacity-100 sm:text-center ${
                  router.asPath === page.path ? "opacity-100" : "opacity-50"
                }`}
              >
                <span className="text-[var(--textColor)]">{page.name}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex w-full justify-between px-4">
          <Link
            className="text-xs opacity-50 duration-300 hover:opacity-100"
            href={"https://github.com/farichieri"}
            target={"_blank"}
          >
            © {year} Fabricio Richieri
          </Link>
          <div className="flex items-center gap-2">
            {SOCIAL.map((social) => (
              <ExternalLink href={social.url} key={social.name} className="">
                {social.icon}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
