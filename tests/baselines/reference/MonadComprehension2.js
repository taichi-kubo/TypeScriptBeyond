//// [tests/cases/compiler/MonadComprehension2.ts] ////

//// [MonadComprehension2.ts]
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


//// [MonadComprehension2.js]
class Maybe {
    constructor(value) {
        this.value = value;
    }
    flatMap(f) {
        return this.value === null ? new Maybe(null) : f(this.value);
    }
}
{
    const r = (() => {
        const a = 1;
        const b = 2;
        return (new Maybe(1))["flatMap"](x => {
            const c = 3;
            return (new Maybe(2))["flatMap"](y => {
                const d = 4;
                return new Maybe(x + y);
            });
        });
    })();
}
