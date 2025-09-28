//// [tests/cases/compiler/Pipeline1.ts] ////

//// [Pipeline1.ts]
const f = (x: number) => x * 2;
const g = (x: number) => x + 1;
const r = 1 + 1 |> f |> g;
console.log(r);

//// [Pipeline1.js]
var f = function (x) { return x * 2; };
var g = function (x) { return x + 1; };
var r = g(f(1 + 1));
console.log(r);
