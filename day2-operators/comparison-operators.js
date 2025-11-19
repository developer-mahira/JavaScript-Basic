
console.log("comparison operators")

// ==  equals to   value check krta hai type conversion krta hai
// != not equal 
// === equal value and type     // value check krta hai type conversion nh krta 
// !== not equal value not equal type
// > greater than
// < less than
// >= greater than or equal to // value bari ya baraber honi chahia  
// <= less than or equal to  //value choti ya baraber honi chahia
// ? turnary operator

// comparison m hum koi vlaues ko compare krty hain or voh 
// return m true ya false ko return krwata hai

let comp1 = 6 ;     // number
let comp2= 8 ;     // number 
let comp3 =6 ;     //number
let comp4 = "6";     // string 
console.log("comp1 == comp2", comp1 == comp2)   // false
// == ismy hum just ye bta rhy hain k 5 or 8  ik doosrey k equal hain jo k nh hain is lia is k 
// return false ayega
console.log("comp1 != comp2" , comp1 != comp2) // true
// is m ye bta rhy hain k 5 or 8 ik doosrey k equal nh hain is lia is k output true return aya
console.log("comp3 == comp4", comp3 == comp4)   // true
 // ye bta rha hai k dono ki values same hain
console.log("comp3 != comp4" , comp3 != comp4)  // false
// is m ye bta rhy hain k 6 or 6 value ik doosrey k equal nh hain is lia is k output false return aya
console.log("comp1 === comp3", comp1 === comp3)  // true 
//  equal value and type dono ki value same hai is lia true return aya
console.log("comp1 !== comp3", comp1 !== comp3)  // false  
// equal value and type dono ki value or data type same hai is lia false return aya
console.log("comp3 === comp4", comp3 === comp4) //false       // equal value and type means 
// === ye equal or value type dono compare krty hain comp3 or comp4 ki value to same hai 
// lekin comp3 ki type number hai or comp4 ki type string hai is lia return is k false ayega 
console.log("comp3 !== comp4" , comp3 !== comp4) // true
// ab is k return true ayega q k hum kehrhy hain k comp3 or comp4 ki value same hai lekin data type different hai
console.log("comp1 > comp2" , comp1 > comp2)  //false
console.log("comp2 > comp1" , comp2 > comp1)  // true
console.log("comp1 < comp2" , comp1 < comp2)  // true
console.log("comp2 < comp1" , comp2 < comp1)  // true
console.log("comp2 >= comp1" , comp2 >= comp1)  // true
console.log("comp1 <= comp2" , comp1 <= comp2)  //true
console.log("comp3 >= comp1" , comp2 >= comp1)  // true
console.log("comp1 <= comp3" , comp1 <= comp2)  //true
console.log("comp1 >= comp2" , comp1 >= comp2)  // false
console.log("comp2 <= comp1" , comp2 <= comp1)  // false
console.log("a > b" , "a" > "b" )  //Kyun compare ho raha?
//Because JS har character ko number value (Unicode/ASCII) assign karta hai
//JS directly check karega ke "a" alphabetically "b" se bara hai ya nahi.
//Yahan **"a" ya "b" variable nahi — ye literal strings hain.
// JS inko AS IS compare karta hai.
//a = 97
//b = 98
//Is liye comparison ho sakta hai.
console.log("a < b" , "a" < "b" )
console.log("b < a" , "b" < "a" )
console.log("b > a" , "b" > "a" )