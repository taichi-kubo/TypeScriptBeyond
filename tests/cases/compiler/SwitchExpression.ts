// @target: es2020

{
  const a: boolean = true;
  const r = switch (a) {
    true => "yes",
    _ => "no",    
  };
}

{
  const a: number = 1;
  const r = switch (a) {
    0 => "zero",
    1 => "one",
    _ => "many",
  };
}

{
  const a: string = "hoge";
  const r = switch (a) {
    "fuga" => "string fuga",
    "hoge" => "string hoge",
    _ => "string unknown",
  };
}

{
  const a: number | null | undefined = 1;
  const r = switch (a) {
    null => "null",
    undefined => "undefined",
    _ => "number",
  };
}

{
  const elem: unknown[] = [];
  const r = switch (elem) {
    [true] => "[true]",
    [1] => "[1]",
    ["hoge"] => "[hoge]",
    [null] => "[null]",
    [undefined] => "[undefined]",
    [elem] => "[elem]",
    [...tail] => "[...tail]",
    [x,] => "[x,",
    [x, 1] => "[x, 1]",
    [x, 2, ...tail] => "[x, 2, ...tail]",
    [{x: 1, y}, [z], ...tail] => "[{x: 1, y}, [z], ...tail]",
  };
}

{
  const obj: Record<string, unknown> = {};
  const r = switch (obj) {
    { x } => "{ x }",
    { x: false } => "{ x: false }",
    { x: 1 } => "{ x: 1 }",
    { "x": 1 } => "{ 'x': 1 }",
    { "x": a } => "{ 'x': a }",
    { ...tail } => "{ ...tail }",
    { x: [1, 2], y: { a: "a", b } } => "{ x: [1, 2] }",
    { x: 1, y, ...tail } => "{ x: 1, y, ...tail }",
    _ if _.x === 1 => "_ if _.x === 1",
    _ => "_",
  };
}

{
  const a = { x: 1, y: 2, z: 3 };
  const r = switch (a) {
    { x, y, z } if x + y + z > 10 => x * y * z,
    _ => "10 or less",
  };
}