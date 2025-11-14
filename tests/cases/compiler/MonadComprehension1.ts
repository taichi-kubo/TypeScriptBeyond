type Option<A> = Readonly<{
  value: A | null;
}>;

const of = <A>(a: A | null): Option<A> => {
  const value = a;
  return { value };
};

const flatMap = <A, B>(self: Option<A>, f: (a: A) => Option<B>): Option<B> =>
  self.value === null ? of<B>(null) : f(self.value);

const a = do (flatMap) {
  const a = 1,
  const b = 2,
  x <- of(1),
  const c = 3,
  y <- of(2),
  const d = 4,
  of(x + y),
};
