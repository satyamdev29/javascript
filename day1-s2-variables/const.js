//es6
const city = 'Bangalore'

// cannot reassign
city='Mysore'

// Can't re declare
const city = 'Pune'

const numbers = [10, 20, 30, 40]

//number = ['One', 'Two', 'Three']

Object.freeze(numbers) // We can freeze
numbers.push(50) // Cannot add property 4, object is not extensible
console.log(numbers)