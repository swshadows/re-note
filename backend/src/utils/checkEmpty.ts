export default function isEmpty(...args: String[]) {
  const parse = args.map((arg) => {
    return arg ? false : true;
  });
  return parse.includes(true);
}
