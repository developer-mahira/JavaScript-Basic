// chapter 1 / question1
console.log("practice questions")
//create a variable of the string and try to add a number to it

let number = 10;
let alphabet = "mahira";
console.log (number + alphabet );  //output: 10mahira

// chapter 1 / question 2

// use type of operator to find the data type of the string in last question
 
console.log (typeof (number + alphabet ));  //output : string


// chapter 1 / question 3

// create const object in javascript can you change it to hold a number later 

const question3 = {          // const variable change nh hoskti error ajayega
    name :"mahira",
    age : 19,
} 
//question3 = 54;  //output : TypeError: Assignment to constant variable.

// question 4 // 

// try to add a new key to the const object in the problem 3 were you able to dpo that 

question3 ["friend"]= "rida";         // we can add and change things in object inside const 
question3 ["name"]= "manahil";        // but cant change const

console.log(question3);

console.log("complete")