[日本語](./README.ja.md)

# TypeScriptBeyond

`TypeScriptBeyond` is a language that extends the syntax of `TypeScript`. It introduces the following features:

- Block expressions `&{ ... }`
- `switch` expressions (pattern matching)
- Pipeline operator `|>`
- Monad comprehensions `do`

Because it only extends TypeScript’s syntax, you keep using `tsc` and `tsserver` the same way you do with standard TypeScript.

## Installation

Install `TypeScriptBeyond` under the `TypeScript` package name. This preserves compatibility with existing TypeScript projects and LSP setups.

```
npm i -D typescript@npm:typescript-beyond
```

## Block Expressions

Block expressions are syntactic sugar for immediately invoked function expressions. Writing `&{ ... }` is equivalent to `(() => { ... })()`.

```ts
const a = &{
  const x = 1;
  const y = 2;
  return x + y;
};
// => 3
```

```ts
const a = async &{
  const x = await Promise.resolve(1);
  const y = await Promise.resolve(2);
  return x + y;
};
// => Promise.resolve(3)
```

## `switch` Expressions (Pattern Matching)

`switch` can be used as an expression, and pattern matching is supported.

```ts
const a = switch (foo) {
  case 1 => 'one';
  case '2' => 'two';
  case [a, b] if a > 0 && b > 0 => `a + b = ${a + b}`;
  case [a, b, ...tail] => `tail.length: ${tail.length}`;
  case {a: 1, b: x, ...tail} => `x = ${x}`;
};
```

`switch` expressions support:

- Value comparison (e.g. `1`, `'2'`)
- Structural matching on arrays/objects (array destructuring, rest elements, object fields)
- Binding values (`a`, `b`, `tail`, `x`) while matching
- Guards (`if a > 0 && b > 0`) to refine a case before it matches

## Pipeline Operator `|>`

Pass the result of each expression to the next function to reduce nesting and improve readability.

```ts
const toUpper = (value: string) => value.toUpperCase();
const exclaim = (value: string) => `${value}!`;

const result =
    "hello"
        |> toUpper
        |> exclaim;
// => "HELLO!"
```

## Monad Comprehensions

You can express multiple monadic computations using intuitive comprehension syntax. There are two forms depending on whether the object exposes a `flatMap` method.

### When the object has a `flatMap` method

If the object provides a `flatMap` method, you can write comprehensions in a concise, intuitive way.

For example, if you have an `Option` with a `flatMap` method, you can write:

```ts
const result = do {
  x <- Option(1);
  y <- Option(2);
  Option(x + y);
};
```

This compiles down to the following JavaScript:

```js
const result = Option(1).flatMap((x) =>
  Option(2).flatMap((y) => Option(x + y))
);
```

### When specifying a standalone `flatMap` function

Even if the object does not implement `flatMap` as a method, you can define a `flatMap` function for that object and use it within the comprehension.

For example, if you have an `Option` without a `flatMap` method:

```ts
const flatMap = <A, B>(m: Option<A>, f: (a: A) => Option<B>): Option<B> => ...;

const result = do (flatMap) {
  x <- Option(1);
  y <- Option(2);
  Option(x + y);
};
```

This compiles down to:

```js
const flatMap = (m, f) => ...

const result = flatMap(Option(1), (x) => flatMap(Option(2), (y) => Option(x + y)));
```

### Omitting `<-`

If a step in the monad comprehension does not need to bind a variable, you can omit `<-`.

```ts
const a = do (option.flatMap) {
  option.of(1);
  option.of(2);
};
// a => option.of(2)
```

### Using `const`

You can also declare variables with `const` inside the comprehension.

```ts
const a = do (option.flatMap) {
  const x = 1;
  const y = 2;
  option.of(x + y);
};
// a => option.of(3)
```

## Using with `fp-ts`

You can use it as a replacement for `pipe` or `bind` in `fp-ts`.

```ts
import { option, number, readonlyArray } from 'fp-ts';

const a = do (option.flatMap) {
  x <- option.of(1);
  y <- option.of(2);
  option.of(x + y);
};

console.log(option.getShow(number.Show).show(a)); // Some(3)

const xs = [1, 2, 3, 4, 5]
  |> readonlyArray.filter((x: number) => x % 2 === 1)
  |> readonlyArray.map((x: number) => x * 2);

console.log(xs); // [2, 6, 10]
```

## VS Code Settings

To make VS Code support TypeScriptBeyond’s extended syntax, you need to change the version of TypeScript used by VS Code to TypeScriptBeyond.

Please follow these steps in the command palette:

1. TypeScript: Select TypeScript Version
2. Use Workspace Version
