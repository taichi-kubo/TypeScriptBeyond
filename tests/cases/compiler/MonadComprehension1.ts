type Option<A> = Readonly<{
  value: A | null;
  flatMap: <B>(f: (a: A) => Option<B>) => Option<B>;
}>;

const of = <A>(a: A | null): Option<A> => {
  const value = a;
  const flatMap = <B>(f: (a: A) => Option<B>) =>
      value === null ? of<B>(null) : f(value);
  return { value, flatMap };
};

const flatMap = <A, B>(self: Option<A>, f: (a: A) => Option<B>): Option<B> =>
  self.flatMap(f);

const option = {
  flatMap,
};

const a = do (flatMap) {
  x <- of(1),
  y <- do (option) {
    a <- of(2),
    b <- of(3),
    of(a * b)
  },
  z <- do {
    c <- of(4),
    d <- of(5),
    of(c + d)
  },
  of(x + y + z)
};

do {
  const a = 1;
} while (true);

do {} while (true);