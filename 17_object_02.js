// const tinderUser= new Object()
const tinderUser={}

tinderUser.id="123asd"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)


const  regularUser={
    email:"jhgasdgsd",
    fullname:{
        userFullName:{
            firstName:"hitesh",
            lastName:"jhvdjvj",
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


// const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3)

const users=[
    {
        id:1,
        email:"jkjkzbck"
    },
    {
        id:1,
        email:"jkjkzbck"
    },
    {
        id:1,
        email:"jkjkzbck"
    },
    {
        id:1,
        email:"jkjkzbck"
    },
]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));