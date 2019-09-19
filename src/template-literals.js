const runTemplateLiteras = () => {
  const greeting = 'Hello';
  const subject = 'World';
  console.log(`${greeting} ${subject}!`, 'template literal'); // Hello World!
  // this is the same as:
  console.log(greeting + ' ' + subject + '!', 'string concat');
};

export default runTemplateLiteras;
