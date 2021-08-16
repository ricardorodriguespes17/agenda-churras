export default function formatDate(date: number) {
  return Intl.DateTimeFormat("pt-br").format(new Date(date));
}
