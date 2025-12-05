/// <reference path="../fourslash.ts"/>

// @filename: /user/username/projects/monad/src/main.ts
//// const main = () => {
////   (new /*1*/Date/*2*/()) |> (_ => _./*3*/getTime/*4*/()) |> JSON./*5*/stringify/*6*/);
//// };
////
//// main();

verify.baselineGoToDefinition("1", "2");
verify.baselineGoToDefinition("3", "4");
verify.baselineGoToDefinition("5", "6");
