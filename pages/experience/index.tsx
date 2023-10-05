import Technologies from '@/components/Technologies/Technologies';
import ExternalLink from '../../components/ExternalLink/ExternalLink';
import MainLayout from '../../components/Layout/MainLayout';

export default function Page() {
  const EXPERIENCES = [
    {
      company: 'Nutrition Plans LLC',
      date: 'April 2023 - Present',
      description:
        'Founder Saas - Meal planner and nutrition platform. <br/> - Feel free to create an account and try it out!',
      technologies: [
        'Firebase',
        'Nextjs',
        'Redux',
        'Stripe',
        'Tailwindcss',
        'Typescript',
        'Typesense',
      ],
      title: 'Founder - Full Stack Developer',
      website: 'https://nutritionplans.co',
    },
    {
      company: 'Sundevs Inc.',
      date: 'Jun 2022 - Jan 2023',
      description:
        'Worked as a Front end developer on the cinemark team for www.cinemark.com.co & www.cinemark.ec solving supports, fixing bugs and adding new features.',
      technologies: ['JavaScript', 'MongoDB', 'Nextjs', 'NodeJs', 'Redux'],
      title: 'Front end developer',
      website: 'https://sundevs.com/',
    },
    {
      company: 'soyHenry Bootcamp',
      date: 'Mar 2022 - May 2022',
      description:
        'Teaching assistant for the Full Stack Web Development Bootcamp at Henry.<br/> - Coordinate a group of students to achieve integration into the study team<br/> - Attend the resolution of exercises and promote group collaboration (Pair Programming)<br/> - Propose ideas to improve Bootcamp processes.',
      technologies: [
        'JavaScript',
        'React',
        'Redux',
        'NodeJs',
        'PostgreSQL',
        'HTML',
        'CSS',
      ],
      title: 'Full Stack Teaching Assistant',
      website: 'https://www.soyhenry.com/',
    },
  ];
  return (
    <MainLayout>
      <section className='w-full flex flex-col justify-center gap-8 items-center'>
        <h1 className='w-full text-left'>Experience</h1>
        <div className='list-disc w-full flex flex-col gap-y-20'>
          {EXPERIENCES.map((experience) => (
            <ExternalLink href={experience.website} key={experience.company}>
              <div className='mb-4 group flex flex-col list-disc list-inside w-full gap-4 hover:border-gray-500/20 hover:bg-slate-500/20 duration-300 p-4 rounded-md select-none border border-transparent'>
                <div className='flex items-center w-full justify-between'>
                  <span className='group-hover:text-blue-400'>
                    <b>{experience.company}</b>
                  </span>
                  <span>{experience.date}</span>
                </div>
                <div className='flex flex-col w-full text-left gap-2'>
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
