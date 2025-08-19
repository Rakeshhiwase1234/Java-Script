const heros = ["Varun","Salman","shahid"]
const cricketer = ["Rahit", "virat","shubham"]

// heros.push(cricketer)

// console.log(heros);
// console.log(heros[3][1]);

// const all = heros.concat(cricketer)
// console.log(all);



const all_new = [...heros,...cricketer]
// console.log(all_new);

const another_array = [1, 2, 3, [4, 5, 6],7, [6, 7, [4, 5]] ]

const  real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Rakesh"))
console.log(Array.from("Rakesh"))
console.log(Array.from({name : "Rakesh"})) //interesting


let score1 = 101
let score2 = 201
let score3 = 303

console.log(Array.of(score1, score2, score3));