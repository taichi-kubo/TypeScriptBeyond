/// <reference path="../fourslash.ts"/>

// @filename: /user/username/projects/monad/src/main.ts
//// const of = <A>(a: A): Promise<A> => Promise.resolve(a);
//// const flatMap = <A, B>(fa: Promise<A>, f: (a: A) => Promise<B>): Promise<B> =>
////   fa.then(f);
////
//// const main = async () => {
////   do (flatMap) {
////     const now = new /*1*/Date/*2*/();
////     res <- of(new /*3*/Date/*4*/());
////     x <- of(new /*5*/Date/*6*/());
////     const a = new /*7*/Date/*8*/();
////     of(JSON./*9*/stringify/*10*/(a));
////   };
//// };
////
//// main();

verify.baselineGoToDefinition("1", "2");
verify.baselineGoToDefinition("3", "4");
verify.baselineGoToDefinition("5", "6");
verify.baselineGoToDefinition("7", "8");
verify.baselineGoToDefinition("9", "10");
