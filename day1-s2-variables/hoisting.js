// var is hoisted
console.log(name) // undefined. its not througing undefined because of name delared after print. because of hoisting concept it will re arrange code.
var name = 'Satyam'

// hoisting will re arrange all the code. if you see above code that will re arrange as bellow. because of that name is displaying in console undefined as name do not hold any values before print. 
// - hoisting will move all the variable in top without values
// - also if varaible not declared and trying to read that varaible then hoisting will not work.in that case it will through error as RefrenceError
// hoisting will allow to re declaring
// let & const will not hoist.
// function will also hoisted.
var name
console.log(name)
var name = 'Satyam'

// console.log(playerName)
let playerName= 'sachin'
console.log(playerName)
