const n1 = '125'
const n2 = '131.75'
const n3 = 12.35
const n4 = 17

// convert number (int) to number (float)
console.log(parseFloat(n4))// 17
console.log(parseFloat('Hello World')) // NaN

//convert number (str) to number (float)
console.log(parseFloat(n1))// 125
console.log(parseFloat(n2))// 131.75

// convert number (float) to number(int)
console.log(parseInt(n3)) // 12
console.log(parseInt('Hello world')) // NaN

//convert number (str) to number (int)
console.log(parseInt(n1))// 125
console.log(parseInt(n2))// 131.75
console.log(Number(n2)) // 131.75

// convert number (int/float) to number(str)
console.log(String(n3)) // '12.35'
console.log(''+ n4) // '17'
console.log((n3).length) // undefined
console.log(String(n3).length) // undefined

const a = 10, a2 = 20, a3=30 // we can declare varaible like this also