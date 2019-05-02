const username ='aniruddha'

console.log(username.slice(0,3)) // ani
console.log(username.slice(3,6)) // rud

console.log(username.slice(1)) // niruddha
console.log(username[0].toUpperCase()+username.slice(1).toLowerCase()) // to Get first username with capital letter

console.log(username.substr(0,3))// ani
console.log(username.substr(3,2))// ru

const numbers = '1234567890'
// (123) 456-7890
console.log()

//1st using slice with concatination
// using slice with es6 template strings

const first = numbers.slice(0,3)
const second = numbers.slice(3,6)
const third = numbers.slice(6)
console.log(`(${first}) ${second}-${third}`)

//2nd using substr with es6 template strings
console.log(`(${numbers.substr(0,3)}) ${numbers.substr(3,3)}-${numbers.substr(6)}`)