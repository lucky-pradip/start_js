//arrays

const myArr=[0,1,2,3,4,5,6]

console.log(myArr[3])

myArr.push(6)
myArr.push(8)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(19))

const newArr= myArr.join()
console.log(newArr)
console.log(myArr)

//slice.splice

console.log("A",myArr)

const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log(myn2)