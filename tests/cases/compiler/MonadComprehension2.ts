// @target: es2020

class Maybe<A> {
  constructor(public readonly value: A | null) {}
  flatMap<B>(f: (a: A) => Maybe<B>): Maybe<B> {
    return this.value === null ? new Maybe<B>(null) : f(this.value);
  }
}

{
  const r = do {
    const a = 1;
    const b = 2;
    x <- new Maybe(1);
    const c = 3;
    y <- new Maybe(2);
    const d = 4;
    new Maybe(x + y);
  };
}
