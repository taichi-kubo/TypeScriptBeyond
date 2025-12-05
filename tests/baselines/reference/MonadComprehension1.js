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

{
  const r = do (flatMap) {
    const a = 1;
    const b: number = 2;
    const f = (x: number) => x + 10;
    x <- of(1);
    const c = 3;
    y <- of(2);
    const d = 4;
    of(x + y);
  };
}

{
  const f = () => do (flatMap) { of(1) };
}

{
  const r = do (flatMap) { x <- of(1); y <- of(2); of(x + y); };
}

{
  const r = do (flatMap) { x <- of(1); y <- of(2); of(x + y) };
}

{
  const r = do (flatMap) { x <- of(1) };
}

{
  const r = do (flatMap) { const x = 1 };
}

{
  const r = do (flatMap) { };
}

//// [MonadComprehension1.js]
const of = (a) => {
    const value = a;
    return { value };
};
const flatMap = (self, f) => self.value === null ? of(null) : f(self.value);
{
    const r = (() => {
        const a = 1;
        const b = 2;
        const f = (x) => x + 10;
        return (flatMap)(of(1), x => {
            const c = 3;
            return (flatMap)(of(2), y => {
                const d = 4;
                return of(x + y);
            });
        });
    })();
}
{
    const f = () => (() => { return of(1); })();
}
{
    const r = (() => { return (flatMap)(of(1), x => { return (flatMap)(of(2), y => { return of(x + y); }); }); })();
}
{
    const r = (() => { return (flatMap)(of(1), x => { return (flatMap)(of(2), y => { return of(x + y); }); }); })();
}
{
    const r = (() => { return of(1); })();
}
{
    const r = ;
    do
        (flatMap) => { const x = 1; };
    while ();
}
{
    const r = ;
    do
        (flatMap) => { };
    while ();
}
