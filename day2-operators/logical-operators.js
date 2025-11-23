console.log("Logical Operators in JavaScript");
console.log("logical and && operator")

/*Logical AND ( && )

Agar dono conditions true hon, tabhi result true return hota hai.

FORMULA  : condition1 && condition2

true && true  → true  
true && false → false  
false && true → false  
false && false → false*/

let number1 = 10;
let number2 = 20;
let number3 = 10;

console.log ("number1 == number3 && number1 === number3",number1 == number3 && number1 === number3 )
/* ( 10 == 10 )------true   ( 10 === 10)----true
console.log ("number1 == number2 && number2 > number1",number1 == number2 && number2 > number3 )
 ( 20 > 10 )------true   ( 10 == 20)----false 
 > greater than
 < less than*/

console.log("logical or || operator")

/*true || true  → true  
true || false → true  
false || true → true  
false || false → false */

console.log ("number1 == number2 || number2 > number1",number1 == number2 || number2 > number3 )
console.log ("number1 == number2 || number2 > number1",number1 == number2 || number2 > number3 )
console.log ("number2 == number1 || number1 > number2",number2 == number1 || number1 > number2 )


console.log("logical not ! operator")
/*! kisi bhi value ko boolean(true , false) banata hai, phir uska ulta result return karta hai.
!true  → false
!false → true

Truthy aur Falsy Values

JavaScript me values do types ki hoti hain:
Falsy values 7 hoti hain in k ilawa baqi sub truthy hoti hain most of the developer 
 -0 and 0n ko alg count krty hain is lia ye sometimes 7 or someytimes 8 kehlati hain
Ye values NOT ! lagane se true ban jaati hain:

false
0
-0      negative zero
0n   bigint zero
"" (empty string)
null
undefined
NaN  (NOT A NUMBER)

Truthy values:

Baaki sab truthy hoti hain. Un par ! lagaye to false milta hai:

 "abc"  har string except ""
 5       har number except 0 -0 NaN
true
 Arrays [] (empty array)
 object {} (empty object)
"0"    "false"   (string)
" " (space string)
infinity     or bht sari values hain jo truthy hain */

console.log("!true =",!true)
console.log("!false =",!false)

console.log(!0);   // true (because 0 is falsy)
console.log(!5);   // false (because 5 is truthy)

console.log(!"");     // true (empty string = falsy)
console.log(!"hello"); // false (truthy)
console.log(!null);   // true (falsy)

console.log("logical operator !!")
//!! kisi bhi value ko boolean (true , false) me convert kar deta hai.

console.log(!!"");  // (empty string = falsy) true !true = false