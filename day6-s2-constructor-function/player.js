
// properties & methods to be mad available for objects based on the function / type
const numbers = []

function Player(name, runs) {
    this.name = name
    this.runs = runs
    // instance method
    this.calculateAvg= function(){
        let total = 0
        for (let i= 0; i < this.runs.length; i++){
            total += this.runs[i]
        }
        return total / this.runs.length
    }
}

// static method
Player.isPlayer = function(val){
    return val instanceof Player
}
// instance = object
const p1 = new Player('virat', [40,60,50])
console.log(p1.name, p1.run)
console.log(p1.country)
console.log(p1)
console.log(p1.calculateAvg())
//console.log(Player.calculateAvg())
console.log(Player.isPlayer(p1)) // Array.isArray()
console.log(Player.isPlayer(numbers)) // false
console.log(typeof p1) // 'Object'

console.log(p1 instanceof Player) // true
console.log(numbers instanceof Player) // false

const p2 = new Player('Sachin', [60,60,100])
console.log(p2.name)
console.log(p2.calculateAvg())