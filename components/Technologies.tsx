interface Props {
  technologies: Array<string>;
}

const Technologies = ({ technologies }: Props) => {
  return (
    <div className="my-2 flex flex-wrap gap-1 gap-y-2">
      {technologies.map((technology) => (
        <div key={technology}>
          <span className="select-none rounded-3xl bg-blue-300/30 px-2 py-1.5 text-xs">
            {technology}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
