// const p1 = {
//     name: 'virat',
//     runs: [40,60,50],
//     totalMatches: function(){
//         return this.runs.length
//     }, 
//     calcAvg: function(){
//         let total = 0 
//         for(let i = 0; i < this.runs.length; i++ ){
//             total += this.runs[i]
//         }
//         return total / this.runs.length
//     }
// }
// console.log(p1.name, p1.calcAvg())

// const p2 = {
//     name: 'sachin',
//     runs: [43,70,50], 
//     totalMatches: function () {
//         return this.runs.length
//     }, 
//     calcAvg: function () {
//         let total = 0
//         for (let i = 0; i < this.runs.length; i++) {
//             total += this.runs[i]
//         }
//         return total / this.runs.length
//     }
// }
// console.log(p2.name, p2.calcAvg())


// Object Constructor Function / Object Prototype Function
// aka class 
// properties & methods to be made available for objects based on the function / type 

const numbers = []
function Player(name, runs) {
    this.name = name 
    this.runs = runs
    // instance method 
    this.calculateAvg = function() {
        let total = 0 
        for (let i = 0; i < this.runs.length; i++) {
            total += this.runs[i]
        }
        return total / this.runs.length
    }
}

// static method
Player.isPlayer = function(val) {
    return val instanceof Player
}

// instance = object 
const p1 = new Player('virat', [40,60,50])
console.log(p1.name, p1.runs)
console.log(p1.country)
console.log(p1)
console.log(p1.calculateAvg())
console.log(Player.isPlayer(p1)) // Array.isArray() 
console.log(Player.isPlayer(numbers)) // false 
// console.log(Player.calculateAvg())

// console.log(p1.isPlayer())


console.log(typeof p1) // 'object' 

console.log(p1 instanceof Player) // true 
console.log(numbers instanceof Player) // false 

const p2 = new Player('sachin', [60,60,100])
console.log(p2.name)
console.log(p2.calculateAvg())


