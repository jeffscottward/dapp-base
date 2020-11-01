export default function (camelCaseString: string): string {
  return (
    camelCaseString
      // insert a space before all caps
      .replace(/([A-Z])/g, " $1")
      // uppercase the first character
      .replace(/^./, (str: string) => str.toUpperCase())
  );
}
