/// <reference path="../fourslash.ts"/>

// @filename: /user/username/projects/monad/src/main.ts
//// &{
////   const d = new /*1*/Date/*2*/();
////   JSON./*3*/stringify/*4*/(d);
//// };
//// 
//// const main = () => {
////   &{
////     const d = new /*5*/Date/*6*/();
////     JSON./*7*/stringify/*8*/(d);
////   };
//// 
////   const r = &{
////     const d = new /*9*/Date/*10*/();
////     JSON./*11*/stringify/*12*/(d);
////   };
//// }
  
verify.baselineGoToDefinition("1", "2");
verify.baselineGoToDefinition("3", "4");
verify.baselineGoToDefinition("5", "6");
verify.baselineGoToDefinition("7", "8");
verify.baselineGoToDefinition("9", "10");
verify.baselineGoToDefinition("11", "12");
