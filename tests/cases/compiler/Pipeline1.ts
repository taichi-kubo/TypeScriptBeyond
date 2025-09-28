const f = (x: number) => x * 2;
const g = (x: number) => x + 1;
const r = 1 + 1 |> f |> g;
console.log(r);