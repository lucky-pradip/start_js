


function sayMyName() {
    console.log("H")
    console.log("g")
    console.log("g")
    console.log("d")
    console.log("i")
}

// sayMyName();

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result

    return number1+number2;

}

addTwoNumbers(3,5);

const result= addTwoNumbers(3,5)

// console.log("result: ",result)

function loginUsermassage(username)
{
if(username===undefined){
    console.log("pls enter user name")
    return
}

    return `${username} just logged in`
}

// console.log(loginUsermassage("pradip"))
console.log(loginUsermassage())