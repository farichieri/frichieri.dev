const ExternalLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: JSX.Element | string;
  className?: string;
}) => (
  <a
    target='_blank'
    rel='noopener noreferrer'
    href={href}
    className={className ? className : ''}
  >
    {children}
  </a>
);

export default ExternalLink;
