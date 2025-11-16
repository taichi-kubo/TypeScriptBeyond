// @target: es2020

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
