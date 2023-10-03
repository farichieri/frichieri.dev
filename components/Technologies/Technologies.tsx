interface Props {
  technologies: Array<string>;
}

const Technologies = ({ technologies }: Props) => {
  return (
    <div className='flex my-2 flex-wrap gap-y-2 gap-1'>
      {technologies.map((technology) => (
        <div key={technology}>
          <span className='text-xs rounded-3xl px-2 py-1.5 bg-blue-300/30 select-none'>
            {technology}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
