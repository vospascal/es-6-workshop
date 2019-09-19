const runSpreadOperator = () => {
  const obj1 = {
    a: 'a from obj1',
    b: 'b from obj1',
    c: 'c from obj1',
    d: {
      e: 'e from obj1',
      f: 'f from obj1',
    },
  };
  const obj2 = {
    b: 'b from obj2',
    c: 'c from obj2',
    d: {
      g: 'g from obj2',
      h: 'g from obj2',
    },
  };
  console.log({ ...obj1, ...obj2 }, 'object spread operator');
  console.log(Object.assign({}, obj1, obj2), 'object asign');

  const array1 = [1, 2, 4];
  const array2 = [3, 2, 5];

  console.log([...array1, ...array2], 'array spread operator');
  console.log(array1.concat(array2), 'array concat');

  const functionSpread = (a, ...rest) => {
    console.log(a, 'functionSpread a');
    console.log(rest, 'functionSpread rest');
    rest.map(item => console.log(item, 'functionSpread rest item'));
  };
  functionSpread('1', '2', { somenumber: '3' }, [4, 5]);

  function functionArguments(a) {
    console.log(a, 'functionArguments a');
    console.log(arguments, 'functionArguments arguments');
    Object.keys(arguments).map(index =>
      console.log(arguments[index], 'functionArguments items'),
    );
  }
  functionArguments('1', '2', { somenumber: '3' }, [4, 5]);
};

export default runSpreadOperator;
