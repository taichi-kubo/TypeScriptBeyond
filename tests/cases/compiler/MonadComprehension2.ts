class Maybe<A> {
  constructor(public readonly value: A | null) {}
  flatMap<B>(f: (a: A) => Maybe<B>): Maybe<B> {
    return this.value === null ? new Maybe<B>(null) : f(this.value);
  }
}

const a = do {
  x <- new Maybe(1),
  y <- new Maybe(2),
  new Maybe(x + y),
};
