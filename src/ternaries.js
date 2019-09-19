const runTernaries = () => {
  const doesit = {
    work: true,
  };
  const ternaries = doesit.work ? 'it Works!' : 'it doesnt Work :-(';

  console.log(ternaries, 'ternaries');

  let ifelse;
  if (doesit.work) {
    ifelse = 'it Works!';
  } else {
    ifelse = 'it doesnt Work :-(';
  }
  console.log(ifelse, 'ifelse');
};

export default runTernaries;
