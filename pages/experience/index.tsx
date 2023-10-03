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
      title: 'Founder - Software Engineer',
      website: 'https://nutritionplans.com',
    },
    {
      company: 'Improveme',
      date: 'Jan 2023 - April 2023',
      description: 'Side project - Task management platform.',
      technologies: [
        'Firebase',
        'Nextjs',
        'Redux',
        'Tailwindcss',
        'Typescript',
      ],
      title: 'Software Engineer',
      website: 'https://improveme.vercel.app/',
    },
    {
      company: 'Sundevs Inc.',
      date: 'Jun 2022 - Jan 2023',
      description:
        'Front end developer. Worked on www.cinemark.com.co and www.cinemark.com.ec projects.',
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
      <ul>
        {EXPERIENCES.map((experience) => (
          <li key={experience.company}>
            <div className='header'>
              <ExternalLink href={experience.website}>
                <b>{experience.company}</b>
              </ExternalLink>
              <span>{experience.date}</span>
            </div>
            <div className='body'>
              <span>
                <b>{experience.title}</b>
              </span>
              <span>{experience.description}</span>
              <span>Technologies: {experience.technologies.join(', ')}</span>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style-type: disc;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }
        li {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          list-style-type: disc;
          list-style: inside;
          width: 100%;
          gap: 1rem;
        }
        .header {
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
        }
        .body {
          display: flex;
          flex-direction: column;
          width: 100%;
          text-align: left;
          gap: 0.5rem;
        }
      `}</style>
    </MainLayout>
  );
}
