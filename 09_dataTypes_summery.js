/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */


//primitive dataType

//7 types : 1.String,2.number,3.boolearn,4.null,5.undefined,6.symbol,7.BIgInt


const score=100;
const scoreValue=100.3;

const isLoggedIn=false
const outSideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

// const bigNumber= 867687n;



//reference (Non Primitive)

//array,objects,Functions

const heros=["shaktiman","naagraj","Doga"]

let myObj={
    name:"Pradip",
    age: 22

}

const myFunction = function(){
    console.log("hello Pradip")
}
myFunction();

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);