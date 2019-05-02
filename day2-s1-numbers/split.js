const fruits = 'Mango, Grapes, Banana'
console.log(fruits.split(', ')) // Split method will returns give value in array // [ 'Mango', 'Grapes', 'Banana' ]

const email = '1@gmail.com, 2@gmail.com, 3@gmail.com'
console.log(email.split(', ')) // [ '1@gmail.com', '2@gmail.com', '3@gmail.com' ]


const travel ='bangalore -> mandya -> mysore'
console.log(travel.split(' -> ')) // [ 'bangalore', 'mandya', 'mysore' ]
console.log(travel.split(', ')) // [ 'bangalore -> mandya -> mysore' ]

const city = 'bangalore'
console.log(city.split('')) // [ 'b', 'a', 'n', 'g', 'a', 'l', 'o', 'r', 'e' ]