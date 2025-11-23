console.log("if...else Conditional Statements in JavaScript");


/*        if (condition1)?
          /       \
       True       False
       |           |
   Run block     else if (condition2)?
                     /      \
                  True       False
                  |           |
            Run block       else if (condition3)?
                                 /     \
                             True      False
                             |          |
                        Run block      else
                                           |
                                     Run default block
*/


/* if...else ik decision making statement hai jo code ke 
 kuch hisson ko condition k basis pr execute krta hai.

Iska kaam hota hai conditions check karna aur condition true ho ya false,
  uske according different code run karna.

 If condition sach hogi → ye code chalay ga
 Agar condition sach nahi hogi → else wala code chalay ga

 if (condition) {
     Code runs if condition is TRUE
} else {
    Code runs if condition is FALSE
}*/

/*        Condition?
         /    \
     True     False
      |         |
   IF Block   ELSE Block
*/

/* if (condition); → semi-colon never use after if condition
else ka koi condition nahi hota
else sirf tab chalti hai jab if false ho */

let age = prompt("Enter your age: ");
if (age >= 18) {
    console.log("You are eligible to vote.");
}
 else {
    console.log("You are not eligible to vote yet.");
}

/*  ELSE IF (Multiple Conditions)
Jab ek se zyada conditions check karni ho.

“Pehli condition check hogi → agar false ho to next condition check hogi → phir next.”

✔ Syntax:
if (condition1) {
    // runs if condition1 is true
} else if (condition2) {
    // runs if condition1 false AND condition2 true
} else if (condition3) {
    // runs if above all false but this one true
} else {
    // runs if all conditions are false
} */

let marks = prompt("Enter your marks: ");
if (marks >= 90) {
    console.log("A+ Grade");
} else if (marks >= 80) {
    console.log("A Grade");
} else if (marks >= 70) {
    console.log("B Grade");
} else {
    console.log("Fail");
}

/* Nested if...else Statements
Ek if ke andar another if chalana ho to nested if hota hai. */

let agee = prompt("Enter your age: ");
let hasID = true;

if (age >= 18) {
    if (hasID == true) {
        console.log("You can enter.");
    } else {
        console.log("You must show ID.");
    }
} else {
    console.log("Underage.");
}

/*first check: age 18+? YES
Second check: ID hai? YES
Output: You can enter
Nested if multiple layers ke decisions me use hota hai. */