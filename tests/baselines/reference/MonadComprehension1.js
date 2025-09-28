//// [tests/cases/compiler/MonadComprehension1.ts] ////

//// [MonadComprehension1.ts]
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

//// [MonadComprehension1.js]
var of = function (a) {
    var value = a;
    var flatMap = function (f) {
        return value === null ? of(null) : f(value);
    };
    return { value: value, flatMap: flatMap };
};
var flatMap = function (self, f) {
    return self.flatMap(f);
};
var option = {
    flatMap: flatMap,
};
var a = (function () {
    var __flatMap__ = "flatMap" in
        flatMap ? flatMap["flatMap"] : flatMap;
    return __flatMap__(of(1), function (x) { return __flatMap__((function () {
        var __flatMap__ = "flatMap" in
            option ? option["flatMap"] : option;
        return __flatMap__(of(2), function (a) { return __flatMap__(of(3), function (b) {
            return of(a * b);
        }); });
    })(), function (y) { return __flatMap__((function () {
        var __flatMap__ = function (self, callback) { return self["flatMap"](callback); };
        return __flatMap__(of(4), function (c) { return __flatMap__(of(5), function (d) {
            return of(c + d);
        }); });
    })(), function (z) {
        return of(x + y + z);
    }); }); });
})();
do {
    var a_1 = 1;
} while (true);
do { } while (true);
