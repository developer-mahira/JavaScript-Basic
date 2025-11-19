
console.log("variables in js")

// let , var , const 

// variable is like a container
// javascript ik dynamic typing language hai means ik hi variable k runtime per type 
// change hoskta hai 


// java script m phly ( var ) as keyword use hota tha for variable making
// var is globally scoped
// it can be re declared and updated within its scope

console.log("var let and const")

var c = 4; 
var c = "apple";
var c = "Home" ;

console.log (c)

// let block scoped hota hai ye update hoskta hai mgrr redecalred nh hoskta 
// letter , underscore _ , $ dollar sign will use as variable name 
// digits , any keyword of javascript cannot use as variable name

let D = 5;      // let = keyword
let $= 5 ;     // a , _ , $ = variable name OR identifier
let _= 5;     // (=)  = assingment operator
let e = 5;    // 5 = value OR literal
e = 8;    // let update hoskta hai lekin redeclared nh ager hum likhty let C = 8 ; 
//to error ajata q k ye C memory m already declared hai or let redeclared nh krta lekin 
// jb humny C = 8 ; likha to humny memory ko ye btaya k jo C = 5 ; memory m already 
// declared hai usy C = 8; update kardo 

console.log(D);
console.log($);
console.log(_);
console.log(e);

//  let 6 = 8 ;              variable name can't be digit
//  let var = 19 ;           java script k kisi bh keyword ko as variable name use nh krskty hain

// CONST cannot be update and also cannot redeclared and it should must be
//  initialized during declaration

const f = "noor";  //( d ) declared hoa yani k memory m create hoa 
// initialize bh hoa means (noor) value assing bh hoi 
console.log(f)
