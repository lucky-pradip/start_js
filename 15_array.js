const marvel_heros=["thor","captain_America","superman","iroonMan"]
const dc_heros=["spiderman","machoman","haluluiya"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

const all_new_heros=[...marvel_heros,...dc_heros]

console.log(all_new_heros)

const another_array=[1,1,2,4,5,6,[7,89,7],[6,7,8,9,2,[2,3,4]]]

const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("pradip"))
console.log(Array.from("pradip"))
console.log(Array.from("pradip"))

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))
