# TypeScriptBeyond

`TypeScriptBeyond` は `TypeScript` を拡張した言語です。以下の機能が追加されています。

- パイプライン演算子 `|>`
- モナド内包表記

`tsc`や`tsserver`は`TypeScript`と同様に使用することができます。

## インストール

`TypeScriptBeyond`を`TypeScript`としてインストールします。

```
npm i -D typescript@npm:typescript-beyond
```

## パイプライン演算子 `|>`

式の評価結果を次の関数に渡すことで、ネストを減らし読みやすさを向上させます。

```ts
const toUpper = (value: string) => value.toUpperCase();
const exclaim = (value: string) => `${value}!`;

const result =
    "hello"
        |> toUpper
        |> exclaim;
// => "HELLO!"
```

## モナド内包表記

複数のモナド計算を直感的な内包表記構文で記述できます。この内包表記は、オブジェクトが `flatMap` メソッドを持っている場合と、そうでない場合の 2 つの書き方が存在します。

### オブジェクトが `flatMap` メソッドを持っている場合

オブジェクトが `flatMap` メソッドを持っている場合は、直感的な構文で内包表記を記述できます。

例えば、`flatMap` メソッドを持つ `Option` が定義されている場合は、以下のように書くことができます。

```ts
const result = do {
  x <- Option(1),
  y <- Option(2),
  Option(x + y),
};
```

これは以下の `JavaScript` のコードに変換されます。

```js
const result = Option(1).flatMap((x) =>
  Option(2).flatMap((y) => Option(x + y))
);
```

### 内包表記で使用する `flatMap` 関数を指定する場合

オブジェクトが `flatMap` をメソッドとして持っていない場合でも、そのオブジェクトに対する `flatMap` 関数を定義して、内包表記にそれを使うように指定することができます。

例えば、`flatMap` メソッドを持っていない `Option` がある場合は、以下のように書くことができます。

```ts
const flatMap = <A, B>(m: Option<A>, f: (a: A) => Option<B>): Option<B> => ...;

const result = do (flatMap) {
  x <- Option(1),
  y <- Option(2),
  Option(x + y),
};
```

これは以下の `JavaScript` のコードに変換されます。

```js
const flatMap = (m, f) => ...

const result = flatMap(Option(1), (x) => flatMap(Option(2), (y) => Option(x + y)));
```

## `fp-ts`で使用する

`fp-ts`の`pipe`や`bind`の代わりに使用することができます。

```ts
import {option, number, readonlyArray} from 'fp-ts';

const a = do (option.flatMap) {
  x <- option.of(1),
  y <- option.of(2),
  option.of(x + y),
};

console.log(option.getShow(number.Show).show(a)); // Some(3)

const xs = [1, 2, 3, 4, 5]
  |> readonlyArray.filter((x: number) => x % 2 === 1)
  |> readonlyArray.map((x: number) => x * 2)

console.log(xs); // [2, 6, 10]
```

## VS Code の設定

VS Code で`TypeScriptBeyond`の拡張構文に対応するには、VS Code で使用する`TypeScript`を`TypeScriptBeyond`に変更する必要があります。

コマンドパレットで以下の設定を行ってください。

1. TypeScript: Select TypeScript Version
2. Use Workspace Version
