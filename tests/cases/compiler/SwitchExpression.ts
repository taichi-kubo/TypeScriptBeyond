// @target: es2020

{
  const a: boolean = true;
  const r = switch (a) {
    case true => "yes";
    case _ => "no";
  };
}

{
  const a: boolean = true;
  const r = switch (a) { case true => "yes" case _ => "no" };
}

{
  const a: number = 1;
  const r = switch (a) {
    case 0 => "zero";
    case 1 => "one";
    case _ => "many";
  };
}

{
  const a: string = "hoge";
  const r = switch (a) {
    case "fuga" => "string fuga";
    case "hoge" => "string hoge";
    case _ => "string unknown";
  };
}

{
  const a: number | null | undefined = 1;
  const r = switch (a) {
    case null => "null";
    case undefined => "undefined";
    case _ => "number";
  };
}

{
  const elem: unknown[] = [];
  const r = switch (elem) {
    case [true] => "[true]";
    case [1] => "[1]";
    case ["hoge"] => "[hoge]";
    case [null] => "[null]";
    case [undefined] => "[undefined]";
    case [elem] => "[elem]";
    case [...tail] => "[...tail]";
    case [x,] => "[x,]";
    case [x, 1] => "[x, 1]";
    case [x, 2, ...tail] => "[x, 2, ...tail]";
    case [{x: 1, y}, [z], ...tail] => "[{x: 1, y}, [z], ...tail]";
  };
}

{
  const obj: Record<string, unknown> = {};
  const r = switch (obj) {
    case { x } => "{ x }";
    case { x: false } => "{ x: false }";
    case { x: 1 } => "{ x: 1 }";
    case { "x": 1 } => "{ 'x': 1 }";
    case { "x": a } => "{ 'x': a }";
    case { ...tail } => "{ ...tail }";
    case { x: [1, 2], y: { a: "a", b } } => "{ x: [1, 2] }";
    case { x: 1, y, ...tail } => "{ x: 1, y, ...tail }";
    case _ if _.x === 1 => "_ if _.x === 1";
    case _ => "_";
  };
}

{
  const a = { x: 1, y: 2, z: 3 };
  const r = switch (a) {
    case { x, y, z } if x + y + z > 10 => x * y * z;
    case _ => "10 or less";
  };
}