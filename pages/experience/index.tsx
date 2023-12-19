import Technologies from "@/components/Technologies/Technologies";
import ExternalLink from "../../components/ExternalLink/ExternalLink";
import MainLayout from "../../components/Layout/MainLayout";

export default function Page() {
  const EXPERIENCES = [
    {
      company: "Nutrition Plans LLC",
      date: "Jan 2023 - Present",
      description: `- Developed and maintained a SaaS meal planner and nutrition platform. Web app built with: Next 13.0, React
        18.0, TypeScript 5.0, Tailwind 3.3, Redux 4.0, Firebase 9.19, Stripe. Developing mobile app with: React Native
        and centralized backend with NestJs (NodeJs), TypeORM, JWT & MongoDB`,
      technologies: [
        "Nextjs",
        "React",
        "Redux",
        "Stripe",
        "Tailwindcss",
        "Typescript",
        "Mdx",
        "Typesense",
        "React Native",
        "NodeJs",
        "NestJs",
        "MongoDB",
        "TypeORM",
        "JWT",
      ],
      title: "Founder - Full Stack Developer",
      website: "https://nutritionplans.co",
    },
    {
      company: "Sundevs Inc.",
      date: "Jun 2022 - Jan 2023",
      description: `- Worked as a front-end developer on a web platform for the cinema industry with 1 million users
        (https://cinemark.com.co), adding features, resolving bugs, and meeting client requirements. Utilized MERN
        Stack: Next 12.0, React 17.0, JavaScript ES6, Redux 4.0, Node.js, MongoDB 6.0, Express 4.17, Google
        Analytics.`,
      technologies: ["JavaScript", "MongoDB", "Nextjs", "NodeJs", "Redux"],
      title: "Junior Software Engineer",
      website: "https://sundevs.com/",
    },
    {
      company: "soyHenry Bootcamp",
      date: "Mar 2022 - May 2022",
      description:
        "- Selected as a teaching assistant to mentor new students in the bootcamp program. <br/> - Coordinate a group of students to achieve integration into the study team<br/> - Attend the resolution of exercises and promote group collaboration (Pair Programming).",
      technologies: [
        "JavaScript",
        "React",
        "Redux",
        "NodeJs",
        "PostgreSQL",
        "HTML",
        "CSS",
      ],
      title: "Full Stack Teaching Assistant",
      website: "https://www.soyhenry.com/",
    },
    {
      company: "USS Seguridad Integral",
      date: "Mar 2017 - Dec 2021",
      description:
        "- Monitored emergency alarms for homes, enterprises, and vehicles as a Monitor Operator.  <br/> -  Transitioned to Sales Account Executive role, selling, and providing customer support.  <br/> - Received a diploma in recognition of my effort and dedication, given by the company's direction",
      technologies: [],
      title: "Monitor Operator - Accounts Executive",
      website: "https://uss.com.ar/",
    },
  ];
  return (
    <MainLayout>
      <section className="flex w-full flex-col items-center justify-center gap-8">
        <h1 className="w-full text-left">Experience</h1>
        <div className="flex w-full list-disc flex-col gap-y-20">
          {EXPERIENCES.map((experience) => (
            <ExternalLink href={experience.website} key={experience.company}>
              <div className="group mb-4 flex w-full select-none list-inside list-disc flex-col gap-4 rounded-md border border-transparent p-4 duration-300 hover:border-gray-500/20 hover:bg-slate-500/20">
                <div className="flex w-full items-center justify-between">
                  <span className="group-hover:text-blue-400">
                    <b>{experience.company}</b>
                  </span>
                  <span>{experience.date}</span>
                </div>
                <div className="flex w-full flex-col gap-2 text-left">
                  <span>
                    <b>{experience.title}</b>
                  </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: experience.description }}
                  ></span>
                  <Technologies technologies={experience.technologies} />
                </div>
              </div>
            </ExternalLink>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
