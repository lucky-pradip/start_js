// singleton
//object.create

//object literals

const mySym=Symbol("key1")


const JsUser={
    name: "Pradip",
    "fullName":"Pradip sahoo",
    [mySym]:"mykey1",
    age:21,
    location:"ramnagar",
    email:"sahoopradip2005@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullName"])
console.log(typeof JsUser.mySym)
console.log(JsUser[mySym])


JsUser.email="jjkjabk@hsaj"
Object.freeze(JsUser)
JsUser.email="jbbkjadkj"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello js user")
}

console.log(JsUser.greeting())

