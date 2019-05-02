const person = {
    name : 'arjun',
    city: 'banglore',
    country: 'india',
    bio: 'some bio'
}

// const name = {
//  name,bio,city,country
// } = person
// console.log(name,city,bio,country)

//give alias to the property const
const { name: firstName } = person
console.log(firstName)

//give default values if props dont exist
const {occupation = 'SE' } = person
console.log(occupation)
console.log(person) //not affected
//give alias and set a default value
const { occupation: profession = 'SE' } = person
console.log(profession)

const city = {
    info:{
        name: 'bangalore',
        minTemp: 11,
        maxTemp: 42,
    }
}

console.log(`We live in ${city.info.name} here the minimum temperature is ${city.info.minTemp} and maximum temperature is ${city.info.maxTemp}`)

const { name, minTemp, maxTemp } = city.info

console.log(`We live in ${name} here the minimum temperature is ${minTemp} and maximum temperature is ${maxTemp}`)

function oddEvens(numbers){
    const evens = []
    const odds = []
    numbers.forEach(function(num){
        if(num%2 ==0)
        {
            evens.push(num)
        }
        else
        {
            odds.push(num)
        }
    })
    return {   //object concise property
        evens,
        odds
    }
}

// //if multiple values have to be returned from a function,then it should return either as an oobject or an array.
const { evens, odds } = oddEvens([10,15,20,25])// object destructing
console.log('even numbers are',evens)
console.log('odd numbers are',odds)