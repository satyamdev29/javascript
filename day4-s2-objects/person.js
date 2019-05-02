const person = {
    firstName: 'Arjun',
    lastName: 'Reddy'
}

// loop over an object 
for( const prop in person) {
    console.log(prop, person[prop] ) // must use [] braket to get property value. if use .(dot) operatior it will through undefined. becz it will look person object prop propert which is not availabel in object then it will throug undefined.
}

// Object.keys(person).forEach(function(prop){
//     console.log(prop, person[prop])
// })


// for( let i = 0; i < Object.keys(person).length; i++){
//     console.log(Object.keys(person)[i], person[Object.keys(person)[i]])
// }

// whenenver the property of an obj is made available via a variable, we have to use the [] notation


const random = 'firstName'
console.log(person.random) // undefined
console.log(person[random])