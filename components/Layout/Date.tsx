import { parseISO, format } from 'date-fns';

const Date = ({ dateString }: { dateString: any }) => {
  const date = parseISO(dateString);
  return (
    <time style={{ fontSize: '.9rem', opacity: '.5' }} dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
};

export default Date;
