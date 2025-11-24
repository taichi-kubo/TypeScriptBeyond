// @target: es2020

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