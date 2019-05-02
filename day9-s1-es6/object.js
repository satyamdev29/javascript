// concise object properties
// es5
var name = 'arjun'
var city = 'bangalore'

var person = {
    name: name,
    city: city
}

console.log(person)

//es6
const student ={
    name,
    city
}
console.log(student)

// concise object methods

// es5

var person ={
    firstName: 'Khan',
    greet: function(){
        return 'Hi, my name is ' + this.firstName
    }
}

console.log(person.greet())

//es6
const actor ={
    firstName: 'Khan',
    greet(){
        return `My Name is ${this.firstName}`
    }
}

console.log(actor.greet())