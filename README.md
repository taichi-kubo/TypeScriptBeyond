# TypeScript Beyond

TypeScript Beyond builds on standard TypeScript and ships with two core language extensions.

## Pipeline operator `|>` support

Pass the result of an expression into the next function to flatten nested calls and improve readability.

```ts
const toUpper = (value: string) => value.toUpperCase();
const exclaim = (value: string) => `${value}!`;

const result =
    "hello"
        |> toUpper
        |> exclaim;
// => "HELLO!"
```

## Monad comprehensions

Express a sequence of monadic computations with an intuitive comprehension syntax. The comprehension syntax works in two styles depending on whether the object exposes a `flatMap` method.

### Objects that provide a `flatMap` method

When the target object already has a `flatMap` method, you can author the comprehension directly.

For example, if an `Option` type exposes a `flatMap` method, you can write the following:

```ts
const result = do {
  x <- Option(1),
  y <- Option(2),
  Option(x + y),
};
```

This code compiles down to ordinary JavaScript.

```js
const result = Option(1).flatMap((x) =>
  Option(2).flatMap((y) => Option(x + y))
);
```

### Supplying a standalone `flatMap` function

When an object does not expose `flatMap` as a method, you can define a standalone `flatMap` function and point the comprehension at it.

For instance, given an `Option` implementation without a `flatMap` method:

```ts
const flatMap = <A, B>(m: Option<A>, f: (a: A) => Option<B>): Option<B> => ...;

const result = do (flatMap) {
  x <- Option(1),
  y <- Option(2),
  Option(x + y),
};
```

This expands to JavaScript that repeatedly calls the provided `flatMap` helper.

```js
const flatMap = (m, f) => ...

const result = flatMap(Option(1), (x) => flatMap(Option(2), (y) => Option(x + y)));
```
