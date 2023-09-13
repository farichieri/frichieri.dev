const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: JSX.Element;
}) => (
  <a target='_blank' rel='noopener noreferrer' href={href}>
    {children}
  </a>
);

export default ExternalLink;
