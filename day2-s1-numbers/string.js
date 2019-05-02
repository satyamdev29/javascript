const password = 'password123'
const userName = 'Satyam'
const lastName = 'Mishra'
//const email = new String() // its not commonly used And this is constructor method to create string as Object.

console.log(password.length) //1
console.log(userName.toUpperCase()) // 'SATYAM'
console.log(userName) // 'Satyam'

//const numbers = []
//const fruits = new Array() // To create array using constructor method.

console.log(lastName.toLocaleLowerCase()) // 'mishra'
console.log(userName.indexOf('a')) //1
console.log(userName.indexOf()) //-1
console.log(lastName.lastIndexOf('a')) // 5
console.log(lastName.lastIndexOf('z')) // -1

console.log(userName.indexOf('at')) //1

console.log(userName.includes('at')) // true
console.log(userName.includes('po')) // false

console.log(userName.charAt(0)) // true
console.log(userName.charAt(3)) // false

// string are array of characters
console.log(userName[0])
console.log(userName[1])
console.log(userName[2])
console.log(userName[3])

for (let i =0 ; i<userName.length; i++){
    console.log(userName[i])
}

const source = 'bangalore'
const destination = 'mysore'
const kms = 150
const time = '3 hours 30 mins'

console.log('The distance between ' + source + ' and ' + destination+ ' is '+ (kms+12) +'kms and the time taken is '+time)

//es6 - template string
//syntatical sugar
// back tick ``

console.log(`The distance between ${source} and ${destination} is ${kms+12} kms and the time taken is ${time}`)