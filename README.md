# TypeScriptBeyond

`TypeScriptBeyond` is a language that extends `TypeScript`. It introduces the following features:

- Pipeline operator `|>`
- Monad comprehensions

You can continue to use `tsc` and `tsserver` just like with standard `TypeScript`.

## Installation

Install `TypeScriptBeyond` under the `TypeScript` package name.

```
npm i -D typescript@npm:typescript-beyond
```

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
  x <- Option(1),
  y <- Option(2),
  Option(x + y),
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
  x <- Option(1),
  y <- Option(2),
  Option(x + y),
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
  option.of(1),
  option.of(2),
};
// a => option.of(2)
```

### Using `const`

You can also declare variables with `const` inside the comprehension.

```ts
const a = do (option.flatMap) {
  const x = 1,
  const y = 2,
  option.of(x + y),
};
// a => option.of(3)
```

## Using with `fp-ts`

You can use it as a replacement for `pipe` or `bind` in `fp-ts`.

```ts
import { option, number, readonlyArray } from 'fp-ts';

const a = do (option.flatMap) {
  x <- option.of(1),
  y <- option.of(2),
  option.of(x + y),
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
