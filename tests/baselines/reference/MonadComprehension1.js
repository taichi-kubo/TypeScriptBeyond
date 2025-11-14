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
  const a = 1,
  const b = 2,
  x <- of(1),
  const c = 3,
  y <- of(2),
  const d = 4,
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
var a = (function () {
    var a = 1;
    var b = 2;
    return (flatMap)(of(1), function (x) {
        var c = 3;
        return (flatMap)(of(2), function (y) {
            var d = 4;
            return of(x + y);
        });
    });
})();
