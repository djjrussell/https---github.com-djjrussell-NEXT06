export default function getFormattedDate(dateString: string): string {
  debugger;
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
