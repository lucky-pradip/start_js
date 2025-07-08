//Dates

let myDate= new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

// let myCreateDate =new Date(2025,0,23)
// let myCreateDate =new Date(2025,07,07,21,0)
// let myCreateDate =new Date("2025-01-24")
let myCreateDate =new Date("01-14-1025")
// console.log(myCreateDate.toLocaleString())

let myTimeStamp= Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate);
console.log(newDate.getDay())
console.log(newDate.getHours())

newDate.toLocaleString('defult',{
    weekday:"long",
    
})