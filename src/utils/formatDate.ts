import { parseISO, format } from 'date-fns';

function formatDate(value: Date): string {
  const parsedDate = parseISO(String(value));

  const formattedDate = format(parsedDate, "dd'/'MM'/'yyyy'");

  return formattedDate;
}

export default formatDate;
