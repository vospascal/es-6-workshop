const runDestructuring = () => {
  const obj = { x: 3.6, y: 7.8 };

  function makeCalculationArgumentDescructuring({ x, y: d, z = 4 }) {
    return Math.floor((x + d + z) / 3);
  }
  // this is the same as
  function makeCalculationConstDescructuring(obj) {
    const { x, y: d, z = 4 } = obj;
    return Math.floor((x + d + z) / 3);
  }
  // which is the same as
  function makeCalculationNoDescructuring(obj) {
    const x = obj.x;
    const d = obj.y;
    const z = obj.z === undefined ? 4 : obj.z;
    return Math.floor((x + d + z) / 3);
  }

  console.log(
    makeCalculationArgumentDescructuring(obj),
    'makeCalculationArgumentDescructuring',
  );
  console.log(
    makeCalculationConstDescructuring(obj),
    'makeCalculationConstDescructuring',
  );
  console.log(
    makeCalculationNoDescructuring(obj),
    'makeCalculationNoDescructuring',
  );

  const [descructuredArrayNumberOne, descructuredArrayNumberTwo] = [1, 2];
  console.log(descructuredArrayNumberOne, 'descructuredArrayNumberOne');
  console.log(descructuredArrayNumberTwo, 'descructuredArrayNumberTwo');

  const descructuredFunctionArray = ({ a = 0, b = 0 }) => [a, b];
  const [
    descructuredFunctionArrayReturnOne,
    descructuredFunctionArrayReturnTwo,
  ] = descructuredFunctionArray({ a: 1, b: 3 });
  console.log(
    descructuredFunctionArrayReturnOne,
    'descructuredFunctionArrayReturnOne',
  );
  console.log(
    descructuredFunctionArrayReturnTwo,
    'descructuredFunctionArrayReturnTwo',
  );

  const descructuredFunctionObj = ({ a = 0, b = 0 }) => ({ a, b });
  const {
    a: descructuredFunctionObjReturnOne,
    b: descructuredFunctionObjReturnTwo,
  } = descructuredFunctionObj({ a: 1, b: 3 });
  console.log(
    descructuredFunctionObjReturnOne,
    'descructuredFunctionObjReturnOne',
  );
  console.log(
    descructuredFunctionObjReturnTwo,
    'descructuredFunctionObjReturnTwo',
  );
};

export default runDestructuring;
