const runArrowFunctions = () => {
  const getFive = () => 5;
  const addFive = a => a + 5;
  const divide = (a, b) => a / b;
  // this is the same as:
  function _getFive() {
    return 5;
  }
  function _addFive(a) {
    return a + 5;
  }
  function _divide(a, b) {
    return a / b;
  }
  console.log(getFive(), 'getFive() arrow function');
  console.log(_getFive(), '_getFive() normal function');
  console.log(addFive(5), 'addFive(5) arrow function');
  console.log(_addFive(5), '_addFive(5) normal function');
  console.log(divide(10, 5), 'divide(10, 5) arrow function');
  console.log(_divide(10, 5), '_divide(10, 5) normal function');
};
export default runArrowFunctions;
