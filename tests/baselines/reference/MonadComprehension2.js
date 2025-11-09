//// [tests/cases/compiler/MonadComprehension2.ts] ////

//// [MonadComprehension2.ts]
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
var a = (new Maybe(1))["flatMap"](function (x) {
    return (new Maybe(2))["flatMap"](function (y) {
        return new Maybe(x + y);
    });
});
