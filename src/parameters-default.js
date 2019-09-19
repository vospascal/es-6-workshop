const runParametersDefault = () => {
  function addNormalFunctionDefaultParams(a, b = 0) {
    return a + b;
  }
  // is the same as
  const addArrowFunctionDefaultParams = (a, b = 0) => a + b;
  // is the same as
  function addNormalFunction(a, b) {
    b = b === undefined ? 0 : b;
    return a + b;
  }

  console.log(
    addNormalFunctionDefaultParams(2),
    'addNormalFunctionDefaultParams(2)',
  );
  console.log(
    addNormalFunctionDefaultParams(2, 2),
    'addNormalFunctionDefaultParams(2,2)',
  );

  console.log(
    addArrowFunctionDefaultParams(2),
    'addArrowFunctionDefaultParams(2)',
  );
  console.log(
    addArrowFunctionDefaultParams(2, 2),
    'addArrowFunctionDefaultParams(2,2)',
  );

  console.log(addNormalFunction(2), 'addNormalFunction(2)');
  console.log(addNormalFunction(2, 2), 'addNormalFunction(2,2)');
};

export default runParametersDefault;
