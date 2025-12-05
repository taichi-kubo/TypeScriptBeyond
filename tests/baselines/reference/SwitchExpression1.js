//// [tests/cases/compiler/SwitchExpression1.ts] ////

//// [SwitchExpression1.ts]
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
  const r = switch ([1, 2, 3, 4, 5]) {
    case [] => 0;
    case [x, y, ...tail] => tail.length;
  }
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
    case { x, ...tail } => tail.y;
    case _ => "10 or less";
  };
}

{
  const f = () => switch (1) { case 1 => "one"; case _ => "unknown"; };
}

//// [SwitchExpression1.js]
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
    const a = true;
    const r = (() => {
        const input = a;
        {
            if ([
                input === true
            ].every(__cond__ => __cond__ === true)) {
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
            const [__temp0_0__] = input;
            if ([
                __temp0_0__ === true, input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[true]";
            }
        }
        {
            const [__temp0_1__] = input;
            if ([
                __temp0_1__ === 1, input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[1]";
            }
        }
        {
            const [__temp0_2__] = input;
            if ([
                __temp0_2__ === "hoge", input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[hoge]";
            }
        }
        {
            const [__temp0_3__] = input;
            if ([
                __temp0_3__ === null, input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[null]";
            }
        }
        {
            const [__temp0_4__] = input;
            if ([
                __temp0_4__ === undefined, input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[undefined]";
            }
        }
        {
            const [elem] = input;
            if ([
                input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[elem]";
            }
        }
        {
            const [...tail] = input;
            return "[...tail]";
        }
        {
            const [x] = input;
            if ([
                input.length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "[x,]";
            }
        }
        {
            const [x, __temp1_6__] = input;
            if ([
                __temp1_6__ === 1, input.length === 2
            ].
                every(__cond__ => __cond__ === true)) {
                return "[x, 1]";
            }
        }
        {
            const [x, __temp1_7__, ...tail] = input;
            if ([
                __temp1_7__ === 2, input.length >= 2
            ].
                every(__cond__ => __cond__ === true)) {
                return "[x, 2, ...tail]";
            }
        }
        {
            const [__temp0_8__, __temp1_10__, ...tail] = input;
            const { x: __key_x_9__, y } = __temp0_8__;
            const [z] = __temp1_10__;
            if ([
                "x"
                    in
                        __temp0_8__, __key_x_9__ === 1, "y"
                    in
                        __temp0_8__, Object.keys(__temp0_8__).length === 2, __temp1_10__.length === 1, input.length >= 2
            ].
                every(__cond__ => __cond__ === true)) {
                return "[{x: 1, y}, [z], ...tail]";
            }
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
{
    const r = (() => {
        const input = [1, 2, 3, 4, 5];
        {
            const [] = input;
            if ([
                input.length === 0
            ].
                every(__cond__ => __cond__ === true)) {
                return 0;
            }
        }
        {
            const [x, y, ...tail] = input;
            if ([
                input.length >= 2
            ].
                every(__cond__ => __cond__ === true)) {
                return tail.length;
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
            const { x } = input;
            if ([
                "x"
                    in
                        input, Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ x }";
            }
        }
        {
            const { x: __key_x_12__ } = input;
            if ([
                "x"
                    in
                        input, __key_x_12__ === false, Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ x: false }";
            }
        }
        {
            const { x: __key_x_13__ } = input;
            if ([
                "x"
                    in
                        input, __key_x_13__ === 1, Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ x: 1 }";
            }
        }
        {
            const { x: __key_x_14__ } = input;
            if ([
                "x"
                    in
                        input, __key_x_14__ === 1, Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ 'x': 1 }";
            }
        }
        {
            const { x: __key_x_15__ } = input;
            const a = __key_x_15__;
            if ([
                "x"
                    in
                        input, Object.keys(input).length === 1
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ 'x': a }";
            }
        }
        {
            const { ...tail } = input;
            if ([
                Object.keys(input).length >= 0
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ ...tail }";
            }
        }
        {
            const { x: __key_x_16__, y: __key_y_19__ } = input;
            const [__temp0_17__, __temp1_18__] = __key_x_16__;
            const { a: __key_a_20__, b } = __key_y_19__;
            if ([
                "x"
                    in
                        input, __temp0_17__ === 1, __temp1_18__ === 2, __key_x_16__.length === 2, "y"
                    in
                        input, "a"
                    in
                        __key_y_19__, __key_a_20__ === "a", "b"
                    in
                        __key_y_19__, Object.keys(__key_y_19__).length === 2, Object.keys(input).length === 2
            ].
                every(__cond__ => __cond__ === true)) {
                return "{ x: [1, 2] }";
            }
        }
        {
            const { x: __key_x_21__, y, ...tail } = input;
            if ([
                "x"
                    in
                        input, __key_x_21__ === 1, "y"
                    in
                        input, Object.keys(input).length >= 2
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
            const { x, y, z } = input;
            if ([
                "x"
                    in
                        input, "y"
                    in
                        input, "z"
                    in
                        input, Object.keys(input).length === 3, x + y + z > 10
            ].
                every(__cond__ => __cond__ === true)) {
                return x * y * z;
            }
        }
        {
            const { x, ...tail } = input;
            if ([
                "x"
                    in
                        input, Object.keys(input).length >= 1
            ].
                every(__cond__ => __cond__ === true)) {
                return tail.y;
            }
        }
        {
            const _ = input;
            return "10 or less";
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
{
    const f = () => (() => {
        const input = 1;
        {
            if ([
                input === 1
            ].every(__cond__ => __cond__ === true)) {
                return "one";
            }
        }
        {
            const _ = input;
            return "unknown";
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}


!!!! File SwitchExpression1.js differs from original emit in noCheck emit
//// [SwitchExpression1.js]
===================================================================
--- Expected	The full check baseline
+++ Actual	with noCheck set
@@ -127,47 +127,47 @@
     const elem = [];
     const r = (() => {
         const input = elem;
         {
-            const [__temp0_0__] = input;
+            const [__temp0_22__] = input;
             if ([
-                __temp0_0__ === true, input.length === 1
+                __temp0_22__ === true, input.length === 1
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "[true]";
             }
         }
         {
-            const [__temp0_1__] = input;
+            const [__temp0_23__] = input;
             if ([
-                __temp0_1__ === 1, input.length === 1
+                __temp0_23__ === 1, input.length === 1
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "[1]";
             }
         }
         {
-            const [__temp0_2__] = input;
+            const [__temp0_24__] = input;
             if ([
-                __temp0_2__ === "hoge", input.length === 1
+                __temp0_24__ === "hoge", input.length === 1
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "[hoge]";
             }
         }
         {
-            const [__temp0_3__] = input;
+            const [__temp0_25__] = input;
             if ([
-                __temp0_3__ === null, input.length === 1
+                __temp0_25__ === null, input.length === 1
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "[null]";
             }
         }
         {
-            const [__temp0_4__] = input;
+            const [__temp0_26__] = input;
             if ([
-                __temp0_4__ === undefined, input.length === 1
+                __temp0_26__ === undefined, input.length === 1
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "[undefined]";
             }
@@ -194,35 +194,35 @@
                 return "[x,]";
             }
         }
         {
-            const [x, __temp1_6__] = input;
+            const [x, __temp1_28__] = input;
             if ([
-                __temp1_6__ === 1, input.length === 2
+                __temp1_28__ === 1, input.length === 2
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "[x, 1]";
             }
         }
         {
-            const [x, __temp1_7__, ...tail] = input;
+            const [x, __temp1_29__, ...tail] = input;
             if ([
-                __temp1_7__ === 2, input.length >= 2
+                __temp1_29__ === 2, input.length >= 2
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "[x, 2, ...tail]";
             }
         }
         {
-            const [__temp0_8__, __temp1_10__, ...tail] = input;
-            const { x: __key_x_9__, y } = __temp0_8__;
-            const [z] = __temp1_10__;
+            const [__temp0_30__, __temp1_32__, ...tail] = input;
+            const { x: __key_x_31__, y } = __temp0_30__;
+            const [z] = __temp1_32__;
             if ([
                 "x"
                     in
-                        __temp0_8__, __key_x_9__ === 1, "y"
+                        __temp0_30__, __key_x_31__ === 1, "y"
                     in
-                        __temp0_8__, Object.keys(__temp0_8__).length === 2, __temp1_10__.length === 1, input.length >= 2
+                        __temp0_30__, Object.keys(__temp0_30__).length === 2, __temp1_32__.length === 1, input.length >= 2
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "[{x: 1, y}, [z], ...tail]";
             }
@@ -269,43 +269,43 @@
                 return "{ x }";
             }
         }
         {
-            const { x: __key_x_12__ } = input;
+            const { x: __key_x_34__ } = input;
             if ([
                 "x"
                     in
-                        input, __key_x_12__ === false, Object.keys(input).length === 1
+                        input, __key_x_34__ === false, Object.keys(input).length === 1
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "{ x: false }";
             }
         }
         {
-            const { x: __key_x_13__ } = input;
+            const { x: __key_x_35__ } = input;
             if ([
                 "x"
                     in
-                        input, __key_x_13__ === 1, Object.keys(input).length === 1
+                        input, __key_x_35__ === 1, Object.keys(input).length === 1
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "{ x: 1 }";
             }
         }
         {
-            const { x: __key_x_14__ } = input;
+            const { x: __key_x_36__ } = input;
             if ([
                 "x"
                     in
-                        input, __key_x_14__ === 1, Object.keys(input).length === 1
+                        input, __key_x_36__ === 1, Object.keys(input).length === 1
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "{ 'x': 1 }";
             }
         }
         {
-            const { x: __key_x_15__ } = input;
-            const a = __key_x_15__;
+            const { x: __key_x_37__ } = input;
+            const a = __key_x_37__;
             if ([
                 "x"
                     in
                         input, Object.keys(input).length === 1
@@ -323,32 +323,32 @@
                 return "{ ...tail }";
             }
         }
         {
-            const { x: __key_x_16__, y: __key_y_19__ } = input;
-            const [__temp0_17__, __temp1_18__] = __key_x_16__;
-            const { a: __key_a_20__, b } = __key_y_19__;
+            const { x: __key_x_38__, y: __key_y_41__ } = input;
+            const [__temp0_39__, __temp1_40__] = __key_x_38__;
+            const { a: __key_a_42__, b } = __key_y_41__;
             if ([
                 "x"
                     in
-                        input, __temp0_17__ === 1, __temp1_18__ === 2, __key_x_16__.length === 2, "y"
+                        input, __temp0_39__ === 1, __temp1_40__ === 2, __key_x_38__.length === 2, "y"
                     in
                         input, "a"
                     in
-                        __key_y_19__, __key_a_20__ === "a", "b"
+                        __key_y_41__, __key_a_42__ === "a", "b"
                     in
-                        __key_y_19__, Object.keys(__key_y_19__).length === 2, Object.keys(input).length === 2
+                        __key_y_41__, Object.keys(__key_y_41__).length === 2, Object.keys(input).length === 2
             ].
                 every(__cond__ => __cond__ === true)) {
                 return "{ x: [1, 2] }";
             }
         }
         {
-            const { x: __key_x_21__, y, ...tail } = input;
+            const { x: __key_x_43__, y, ...tail } = input;
             if ([
                 "x"
                     in
-                        input, __key_x_21__ === 1, "y"
+                        input, __key_x_43__ === 1, "y"
                     in
                         input, Object.keys(input).length >= 2
             ].
                 every(__cond__ => __cond__ === true)) {
