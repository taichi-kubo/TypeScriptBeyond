//// [tests/cases/compiler/SwitchExpression.ts] ////

//// [SwitchExpression.ts]
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

//// [SwitchExpression.js]
{
    const a = true;
    const r = (() => {
        const input = a;
        {
            if ([
                input
                    === true
            ].
                every(__cond__ => __cond__ === true)) {
                return "yes";
            }
        }
        {
            const _ = input;
            return "no";
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
{
    const a = 1;
    const r = (() => {
        const input = a;
        {
            if ([
                input
                    === 0
            ].
                every(__cond__ => __cond__ === true)) {
                return "zero";
            }
        }
        {
            if ([
                input
                    === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "one";
            }
        }
        {
            const _ = input;
            return "many";
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
{
    const a = "hoge";
    const r = (() => {
        const input = a;
        {
            if ([
                input
                    === "fuga"
            ].
                every(__cond__ => __cond__ === true)) {
                return "string fuga";
            }
        }
        {
            if ([
                input
                    === "hoge"
            ].
                every(__cond__ => __cond__ === true)) {
                return "string hoge";
            }
        }
        {
            const _ = input;
            return "string unknown";
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
{
    const a = 1;
    const r = (() => {
        const input = a;
        {
            if ([
                input
                    === null
            ].
                every(__cond__ => __cond__ === true)) {
                return "null";
            }
        }
        {
            if ([
                input
                    === undefined
            ].
                every(__cond__ => __cond__ === true)) {
                return "undefined";
            }
        }
        {
            const _ = input;
            return "number";
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
{
    const elem = [];
    const r = (() => {
        const input = elem;
        {
            const __temp0__ = input[0];
            if ([
                __temp0__
                    === true,
                input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[true]";
            }
        }
        {
            const __temp0__ = input[0];
            if ([
                __temp0__ === 1, input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[1]";
            }
        }
        {
            const __temp0__ = input[0];
            if ([
                __temp0__ === "hoge", input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[hoge]";
            }
        }
        {
            const __temp0__ = input[0];
            if ([
                __temp0__ === null, input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[null]";
            }
        }
        {
            const __temp0__ = input[0];
            if ([
                __temp0__ === undefined, input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[undefined]";
            }
        }
        {
            const elem = input[0];
            if ([
                true, input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[elem]";
            }
        }
        {
            const tail = input.slice(0);
            if ([
                true, input.length >= 0
            ].
                every(__cond__ => __cond__ === true)) {
                return "[...tail]";
            }
        }
        {
            const x = input[0];
            const __temp1__ = input[1];
            if ([
                true, input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[x,";
            }
        }
        {
            const x = input[0];
            const __temp1__ = input[1];
            if ([
                true, __temp1__ === 1, input.length === 2
            ].
                every(__cond__ => __cond__ === true)) {
                return "[x, 1]";
            }
        }
        {
            const x = input[0];
            const __temp1__ = input[1];
            const tail = input.slice(2);
            if ([
                true, __temp1__ === 2, true, input.length >= 2
            ].
                every(__cond__ => __cond__ === true)) {
                return "[x, 2, ...tail]";
            }
        }
        {
            const __temp0__ = input[0];
            const __key_x__ = __temp0__["x"];
            const y = __temp0__["y"];
            const __temp1__ = input[1];
            const z = __temp1__[0];
            const tail = input.slice(2);
            if ([
                "x"
                    in __temp0__,
                __key_x__ === 1,
                "y"
                    in __temp0__,
                Object.keys(__temp0__).length === 2, true, __temp1__.length === 1, true, input.length >= 2
            ].
                every(__cond__ => __cond__ === true)) {
                return "[{x: 1, y}, [z], ...tail]";
            }
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
{
    const obj = {};
    const r = (() => {
        const input = obj;
        {
            const x = input["x"];
            if ([
                "x"
                    in
                        input,
                Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ x }";
            }
        }
        {
            const __key_x__ = input["x"];
            if ([
                "x"
                    in
                        input, __key_x__
                    === false,
                Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ x: false }";
            }
        }
        {
            const __key_x__ = input["x"];
            if ([
                "x"
                    in
                        input,
                __key_x__ === 1, Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ x: 1 }";
            }
        }
        {
            const __key_x__ = input["x"];
            if ([
                "x"
                    in
                        input,
                __key_x__ === 1, Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ 'x': 1 }";
            }
        }
        {
            const __key_x__ = input["x"];
            const a = __key_x__;
            if ([
                "x"
                    in
                        input,
                Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ 'x': a }";
            }
        }
        {
            const tail = Object.assign({}, input);
            if ([
                Object.keys(input).length >= 0
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ ...tail }";
            }
        }
        {
            const __key_x__ = input["x"];
            const __temp0__ = __key_x__[0];
            const __temp1__ = __key_x__[1];
            const __key_y__ = input["y"];
            const __key_a__ = __key_y__["a"];
            const b = __key_y__["b"];
            if ([
                "x"
                    in
                        input,
                __temp0__ === 1, __temp1__ === 2, __key_x__.length === 2,
                "y"
                    in
                        input, "a"
                    in __key_y__,
                __key_a__ === "a",
                "b"
                    in __key_y__,
                Object.keys(__key_y__).length === 2, Object.keys(input).length === 2
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ x: [1, 2] }";
            }
        }
        {
            const __key_x__ = input["x"];
            const y = input["y"];
            const tail = Object.assign({}, input);
            if ([
                "x"
                    in
                        input,
                __key_x__ === 1,
                "y"
                    in
                        input,
                Object.keys(input).length >= 2
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ x: 1, y, ...tail }";
            }
        }
        {
            const _ = input;
            if ([
                _.x === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "_ if _.x === 1";
            }
        }
        {
            const _ = input;
            return "_";
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
{
    const a = { x: 1, y: 2, z: 3 };
    const r = (() => {
        const input = a;
        {
            const x = input["x"];
            const y = input["y"];
            const z = input["z"];
            if ([
                "x"
                    in
                        input, "y"
                    in
                        input, "z"
                    in
                        input,
                Object.keys(input).length === 3,
                x + y + z > 10
            ].
                every(__cond__ => __cond__ === true)) {
                return x * y * z;
            }
        }
        {
            const _ = input;
            return "10 or less";
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
