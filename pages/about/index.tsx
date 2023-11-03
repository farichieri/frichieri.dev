import Image from "next/image";
import Link from "next/link";
import MainLayout from "../../components/Layout/MainLayout";
import Technologies from "@/components/Technologies/Technologies";

export default function About() {
  const links = [
    {
      name: "Github",
      url: "https://github.com/farichieri",
      user: "@farichieri",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/frichieri/",
      user: "@frichieri",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/farichieri",
      user: "@farichieri",
    },
    {
      name: "freeCodeCamp",
      url: "https://www.freecodecamp.org/frichieri",
      user: "@frichieri",
    },
  ];

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "TailwindCSS",
    "HTML",
    "CSS",
    "Node",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "Express",
    "Jest",
    "Git",
    "REST APIs",
    "Vercel",
    "Docker",
  ];

  return (
    <MainLayout>
      <section className="flex flex-col gap-6">
        <h1 style={{ width: "100%", textAlign: "left" }}>About</h1>
        <div className="flex flex-col space-y-8">
          <div className="my-4 flex h-full w-full justify-start gap-4">
            <span className="relative flex h-36 w-36 overflow-auto rounded-full border border-gray-500/20">
              <Image
                src={"/images/frichieri.png"}
                alt="Fabricio Richieri"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                priority
              />
            </span>
            <div className="">
              <h1 className="text-blue-400">Fabricio Richieri</h1>
              <p>Full Stack JavaScript Developer</p>
            </div>
          </div>
          <p>Based in Buenos Aires, Argentina. 🌎</p>
          <p>
            In my free time, I like to do exercises, I go to the gym 💪 and I
            also like to eat healthy 🥦
          </p>
          <p className="">
            I&apos;m an Enthusiastic and dedicated JavaScript/TypeScript
            developer with a keen interest in Front End and Full Stack
            development. Eager to secure a position in a dynamic and innovative
            company where my skills can thrive, and my experiences can make a
            meaningful impact. I am driven by a passion for creating seamless
            and user-friendly digital experiences. With a focus on continuous
            learning, I am committed to contributing to projects that challenge
            me, nurture my expertise, and enable both personal and professional
            growth. Seeking an opportunity to collaborate with a
            forward-thinking team and make a significant mark in the world of
            web development.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-blue-400">Skills</h3>
          <Technologies technologies={technologies} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-blue-400">
            Follow me on:
          </h3>
          <ul className="my-0">
            {links.map((link) => (
              <li key={link.name}>
                - {link.name}:{" "}
                <Link
                  href={link.url}
                  target="_blank"
                  className="opacity-50 duration-300 hover:opacity-100"
                >
                  {link.user}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-baseline gap-4">
          <h3 className="text-base font-semibold text-blue-400">Contact:</h3>
          <a
            href="mailto:frichieri.dev@gmail.com"
            className="opacity-50 duration-300 hover:opacity-100"
          >
            frichieri.dev@gmail.com
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
