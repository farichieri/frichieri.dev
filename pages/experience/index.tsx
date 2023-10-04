import Technologies from '@/components/Technologies/Technologies';
import ExternalLink from '../../components/ExternalLink/ExternalLink';
import MainLayout from '../../components/Layout/MainLayout';

export default function Page() {
  const EXPERIENCES = [
    {
      company: 'Nutrition Plans LLC',
      date: 'April 2023 - Present',
      description: 'Founder Saas - Meal planner and nutrition platform.',
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
        'Worked as a Front end developer on the next sites: www.cinemark.com.co and www.cinemark.com.ec projects, fixing bugs and adding new features.',
      technologies: ['JavaScript', 'MongoDB', 'Nextjs', 'NodeJs', 'Redux'],
      title: 'Front end developer',
      website: 'https://sundevs.com/',
    },
    {
      company: 'soyHenry',
      date: 'Mar 2022 - May 2022',
      description:
        'Teaching assistant for the Full Stack Web Development Bootcamp at Henry.',
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
      <section className='w-full flex flex-col justify-center items-center'>
        <div className='list-disc w-full flex flex-col gap-y-20'>
          {EXPERIENCES.map((experience) => (
            <ExternalLink href={experience.website} key={experience.company}>
              <div className='mb-4 flex flex-col list-disc list-inside w-full gap-4 hover:border-gray-500/20 hover:bg-slate-500/20 duration-300 p-4 rounded-md select-none border border-transparent'>
                <div className='flex items-center w-full justify-between'>
                  <ExternalLink href={experience.website}>
                    <b>{experience.company}</b>
                  </ExternalLink>
                  <span>{experience.date}</span>
                </div>
                <div className='flex flex-col w-full text-left gap-2'>
                  <span>
                    <b>{experience.title}</b>
                  </span>
                  <span>{experience.description}</span>
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
