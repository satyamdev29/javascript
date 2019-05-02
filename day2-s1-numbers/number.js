Math.random()

console.log(Math.random())

// premitive data types
// number
//string
//boolen

const n1 = 101.10
console.log(Math.round(n1)) // return new value

// if data type is object then we can directly call method ex. in rubby
//n1 = 101.10
//n1.round  // this will work for rubby as its object oriented programming language but same will not work for JavaScrip as n1 variable is premitive data type. which is not an object. but if its object type we can directly start invoking method.

//console.log(n1.round()) // TypeError: n1.round is not a function

// but for object types we can direct use method ex.
const num = [10, 20]
num.push(30)
console.log(num)
//object types
//array
//object
//Date
// User Defined DataTypes // Class

console.log(Math.PI)
console.log(Math.pow(2,3))
console.log(Math.sqrt(10))
console.log(Math.abs(-100)) //100

console.log(Math.ceil(10.10)) //11
console.log(Math.ceil(12.75)) //13

console.log(Math.floor(10.90)) //10
console.log(Math.floor(11.10)) //11

console.log(Math.round(12.65)) //13
console.log(Math.round(11.12)) //11

console.log(Math.min(10,20,4,25)) // 4
console.log(Math.min(10,20)) // 10
console.log(Math.min([10, 20, 30 ,40])) // NaN

// spread operator
const numbers = [10, 20, 30, 5, 7]
console.log(Math.min(...numbers)) // 5

console.log(Math.max(10,20,4,25)) // 4
console.log(Math.max(10,20)) // 10
console.log(Math.max([10, 20, 30 ,40])) // NaN

// spread operator for Max
const num1 = [10, 20, 30, 5, 7]
console.log(Math.max(...numbers)) // 5

console.log(Math.random()) // 0 (inclusive) - 1 (exclusive)
console.log(typeof(10)) // Number
console.log(typeof(15.34)) // Number
console.log(typeof(typeof(15.34))) // returns string