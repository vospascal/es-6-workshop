const runShorthandPropertys = () => {
  const a = 'hello';
  const b = 42;
  const c = { d: [true, false] };
  console.log({ a, b, c }, 'short hand');
  // this is the same as:
  console.log({ a: a, b: b, c: c }, 'full defenition');
};

export default runShorthandPropertys;
