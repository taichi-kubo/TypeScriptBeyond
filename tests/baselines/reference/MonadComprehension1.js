//// [tests/cases/compiler/MonadComprehension1.ts] ////

//// [MonadComprehension1.ts]
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
  x <- of(1),
  y <- of(2),
  of(x + y),
};


//// [MonadComprehension1.js]
var of = function (a) {
    var value = a;
    return { value: value };
};
var flatMap = function (self, f) {
    return self.value === null ? of(null) : f(self.value);
};
var a = (flatMap)(of(1), function (x) { return (flatMap)(of(2), function (y) {
    return of(x + y);
}); });
