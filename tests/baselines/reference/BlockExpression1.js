//// [tests/cases/compiler/BlockExpression1.ts] ////

//// [BlockExpression1.ts]
{
  const r = &{
    const x = 1;
    const y = 2;
    return x + y;
  };
}

{
  const r = async &{
    const x = await Promise.resolve(1);
    const y = await Promise.resolve(2);
    return x + y;
  };
}

{
  const a: string = "";
  const x = 1;
  const y = 2;
  const r = switch (a) {
    case "+" => &{
      const z = x + y;
      return z;
    };
    case "*" => &{
      const z = x * y;
      return z;
    };
    case _ => &{
      return 0;
    };
  };
}

//// [BlockExpression1.js]
{
    const r = (() => {
        const x = 1;
        const y = 2;
        return x + y;
    })();
}
{
    const r = (async () => {
        const x = await Promise.resolve(1);
        const y = await Promise.resolve(2);
        return x + y;
    })();
}
{
    const a = "";
    const x = 1;
    const y = 2;
    const r = (() => {
        const input = a;
        {
            if ([
                input
                    === "+"
            ].
                every(__cond__ => __cond__ === true)) {
                return (() => {
                    const z = x + y;
                    return z;
                })();
            }
        }
        {
            if ([
                input
                    === "*"
            ].
                every(__cond__ => __cond__ === true)) {
                return (() => {
                    const z = x * y;
                    return z;
                })();
            }
        }
        {
            const _ = input;
            return (() => {
                return 0;
            })();
        }
        throw new Error("Non-exhaustive pattern match");
    })();
}
