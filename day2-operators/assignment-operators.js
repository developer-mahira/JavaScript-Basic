//assingment operators
// =,+=, -=, *=, **=, /=, %=



console.log( "operators in js")
console.log("assingment operators") 

  
let i = 15;         // ➡️ yahan i ko 15 assign kiya gaya hai. Matlab i = 15. Console me 15 print hoga.
console.log(i);
let j = 20;         // yahan j ko 20 assign kiya gaya hai. Matlab j = 20. Console me 20 print hoga.
console.log(j);

console.log("i will be solved ")

i = j    // 15 = 20    //is line ka matlab hai: "j ki value i ko dedo"j = 20 tha → ab i = 20 ho gaya.Console me print karega 20.
console.log(i);
i += 10; //  20 + 10 = 30      // iska matlab: i = i + 10 ab i = 30. Print karega 30
console.log(i);
i -= 10; // 30 - 20 = 20       //mtlb i = i - 10; x is now 20
console.log(i);
i *= 5; // 20 x 5 = 100      //matlb i = i * 5; x is now 100
console.log(i);
i **= 5;  //100*100*100*100         //mtlb i = i ** 5; x is now 10000000000
console.log(i);
i /= 2;  //    //mtlb  i = i / 2; i = 10000000000 / 2 ;  i now 5000000000
console.log(i);
i %= 3;            //matlab i = i % 3 Remainder (baqi) nikalega:5,000,000,000 ko 3 se divide karo → remainder = 2
console.log(i);

console.log("j will be solved ")

j = i     // 20 = 2    // is operator k mtlb hoga k i kii value j ko dedo it means ab j 15 nh balky 2 hojayega q k upper i ki value 2 hogai thi end m
console.log(j);
j += 10; //  2 + 10 = 12      // Equivalent to i = i + 10; i is now 12
console.log(j);
j -= 10; // 12 - 10 = 2       //Equivalent to i = i - 10; x is now 2
console.log(j);
j *= 5; // 2 x 5 = 10      //Equivalent to i = i * 5; x is now 100
console.log(j);
j **= 5;  //10*10*10*10 = 100000        //Equivalent to i = i ** 5; x is now 100000
console.log(j);
j /= 2;  //50000    //Equivalent to i = i / 2; x is now 500000
console.log(j);
j %= 3;            //Equivalent to i = i % 3; x is now 2
console.log(j);



console.log("i and j")

j = i ;    // 2 = 2    // is operator k mtlb hoga k i ki value j ko dedo it means ab j 15 nh balky 2 hojayega
console.log(j);
j += i;                 // j = 2+2 print hoga 4
console.log(j)
j -= i;               // j = 4 - 2 print hoga 2
console.log(j)
j *= i ;              // j = 2*2 print krega 4
console.log(j)
j **= i ;          // j = 4 ^ 2 = 16 (2*2*2*2) print krega 16
console.log(j)
j /= i;            //j 16 / 2 = 8 print krega 8        
console.log(j)
j %= i;            // j 8 % 2 print krega 0 
console.log(j)


console.log("j and i")

i = j ;           // is k mtlb hai k j ki value i ko dedo ab i 2 nh balky 0 hai q k j ki value 0 hai 
console.log(i);
i += j;           // ab i ki value bh 0 hogai or j already 0 hai to 0 + 0 kya hojayega 0 
console.log(i); 
i -= j;           // again 0 - 0 hoga 0 
console.log(i)
i *= j ;          // 0 * 0 hoga 0 
console.log(i)
i **= j ;  // 1       // 0*0*0*0 (0^0) ye mathematically tricky hai js m 1 output dega
//JavaScript mein 0 ** 0 ka result 1 hota hai. Iska reason: JavaScript (ECMAScript) numeric calculations IEEE-754 double 
// precision par based hain aur spec ke mutabiq x ** y jab dono zero hoon to result 1 return karta hai.
//Note: Mathematics mein 0^0 ko ambiguous (undefined/indeterminate) mana jata hai, 
// lekin programming languages mein practical reasons ki wajah se aksar 1 return hota hai.
// 1 Q ???    Programming mein exponentiation ko aise implement kiya gaya ke empty product ka
//neutral element 1 ho — isliye 0**0 = 1 practical choice hai.
// Simplify karne ke liye: x**0 for any non-zero x => 1.
//  Implementations consistent rakhne ke liye 0**0 ko bhi 1 set kar dete hain.
console.log(i)
i /= j;  //Real life math me: 1 ko 0 se divide nahi kar sakte → undefined.
//JS (aur almost sab programming languages) me:
// 1 ÷ 0 ka result Infinity hota hai. 
//Zero se divide → answer itna bada hota hai ke number me represent nahi ho sakta
//So JavaScript kehta hai: "theek hai, result Infinity le lo."
//JavaScript me Infinity ek number hi hota hai, string ya object nahi.
console.log(i) 
i %= j;    //i %= j → matlab i = i % j → i = Infinity % 0
//JavaScript mein remainder (modulo) with 0 ka result NaN hota hai.
//Infinity % 0 bhi NaN deta hai.
//NaN ka matlab Not-a-Number — yeh indicate karta hai ke
//  operation meaningful numeric result produce nahi kar saka.
console.log(i)
