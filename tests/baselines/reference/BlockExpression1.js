//// [tests/cases/compiler/BlockExpression1.ts] ////

//// [BlockExpression1.ts]
const a = &{
  const x = 1;
  const y = 2;
  return x + y;
};

const b = async &{
  const x = await Promise.resolve(1);
  const y = await Promise.resolve(2);
  return x + y;
}


//// [BlockExpression1.js]
const a = (() => {
    const x = 1;
    const y = 2;
    return x + y;
})();
const b = (async () => {
    const x = await Promise.resolve(1);
    const y = await Promise.resolve(2);
    return x + y;
})();
