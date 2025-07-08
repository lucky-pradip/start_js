const name="hitesh"
const repoCount=50;

// console.log(name+repoCount)

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('pra-dip')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))


const newString = gameName.substring(0,4)
console.log(newString)
const anotherString = gameName.slice(-6,4)
console.log(anotherString)

const newStringOne ="    Pradip   "
console.log(newStringOne)
console.log(newStringOne.trim())//remove all speace

const url ="https://organic-space-memory-97qj4gxx6x553qrj.github.dev/"

console.log(url.replace('space','pradip'))

console.log(url.includes('space'))

console.log(gameName.split('-'))