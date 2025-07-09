function calculateCarPice(val1,val2,...num1){
    return num1
}

// console.log(calculateCarPice(200,44,600,555))

const user={
    UserName:"Pradip",
    price:"233"
}

function handleObject(anyobject){
    console.log(`userName is ${anyobject.UserName} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    UserName:"sam",
    price:456
})

const myNewArray=[200,400,500]

function returnSecondValue(getArray){
    return getArray[0]
}

console.log(returnSecondValue(myNewArray))