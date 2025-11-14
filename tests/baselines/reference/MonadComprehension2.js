//// [tests/cases/compiler/MonadComprehension2.ts] ////

//// [MonadComprehension2.ts]
class Maybe<A> {
  constructor(public readonly value: A | null) {}
  flatMap<B>(f: (a: A) => Maybe<B>): Maybe<B> {
    return this.value === null ? new Maybe<B>(null) : f(this.value);
  }
}

const a = do {
  const a = 1,
  const b = 2,
  x <- new Maybe(1),
  const c = 3,
  y <- new Maybe(2),
  const d = 4,
  new Maybe(x + y),
};


//// [MonadComprehension2.js]
var Maybe = /** @class */ (function () {
    function Maybe(value) {
        this.value = value;
    }
    Maybe.prototype.flatMap = function (f) {
        return this.value === null ? new Maybe(null) : f(this.value);
    };
    return Maybe;
}());
var a = (function () {
    var a = 1;
    var b = 2;
    return (new Maybe(1))["flatMap"](function (x) {
        var c = 3;
        return (new Maybe(2))["flatMap"](function (y) {
            var d = 4;
            return new Maybe(x + y);
        });
    });
})();
