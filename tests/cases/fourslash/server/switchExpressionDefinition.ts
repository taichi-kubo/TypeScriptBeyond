/// <reference path="../fourslash.ts"/>

// @filename: /user/username/projects/monad/src/main.ts
//// const main = () => {
////   {
////     const a = true;
////     switch (a) {
////       case true => JSON./*1*/stringify/*2*/(a);
////       case _ => JSON./*3*/stringify/*4*/(a);
////     };
////   }
//// 
////   {
////     const a = 'foo';
////     switch (a) {
////       case 'foo' => JSON./*5*/stringify/*6*/(a);
////       case _ => JSON./*7*/stringify/*8*/(_);
////     };
////   }
//// 
////   {
////     const a = 42;
////     switch (a) {
////       case 42 => JSON./*9*/stringify/*10*/(a);
////       case _ => JSON./*11*/stringify/*12*/(_);
////     };
////   }
//// 
////   {
////     const a = null;
////     switch (a) {
////       case null => JSON./*13*/stringify/*14*/(a);
////       case _ => JSON./*15*/stringify/*16*/(_);
////     };
////   }
//// 
////   {
////     const a = undefined;
////     switch (a) {
////       case undefined => JSON./*17*/stringify/*18*/(a);
////       case _ => JSON./*19*/stringify/*20*/(_);
////     };
////   }
//// 
////   {
////     const a = [1, 2, 3];
////     switch (a) {
////       case [1, 2, 3] => JSON./*21*/stringify/*22*/(a);
////       case _ => JSON./*23*/stringify/*24*/(_);
////     };
////   }
//// 
////   {
////     const a = { x: 10, y: 20 };
////     switch (a) {
////       case { x: 10, y: 20 } => JSON./*25*/stringify/*26*/(a);
////       case _ => JSON./*27*/stringify/*28*/(_);
////     };
////   }
////
////   {
////     const a = { x: 10, y: 20 };
////     const r = switch (a) {
////       case { x: 10, y: 20 } => JSON./*29*/stringify/*30*/(a);
////       case _ => JSON./*31*/stringify/*32*/(_);
////     };
////   }
//// };
//// 
//// main();

verify.baselineGoToDefinition("1", "2");
verify.baselineGoToDefinition("3", "4");
verify.baselineGoToDefinition("5", "6");
verify.baselineGoToDefinition("7", "8");
verify.baselineGoToDefinition("9", "10");
verify.baselineGoToDefinition("11", "12");
verify.baselineGoToDefinition("13", "14");
verify.baselineGoToDefinition("15", "16");
verify.baselineGoToDefinition("17", "18");
verify.baselineGoToDefinition("19", "20");
verify.baselineGoToDefinition("21", "22");
verify.baselineGoToDefinition("23", "24");
verify.baselineGoToDefinition("25", "26");
verify.baselineGoToDefinition("27", "28");
verify.baselineGoToDefinition("29", "30");
verify.baselineGoToDefinition("31", "32");
