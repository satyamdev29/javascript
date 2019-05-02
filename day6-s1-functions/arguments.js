// argumen object exist in side function 
// ex - push, math.min(10,20)
function add(){
    // arguments obj will hold the values in key:value pair of the arguments passed
    console.log(arguments)
    return arguments ['0'] + arguments ['1'] + arguments ['12']
}

console.log(add(10,20,30))


// ex - push, Math.min(10,20,30),  Math.min(10,20)
function sum(){
    // arguments obj will hold the values in key:value pair of the arguments passed
let total = 0
// for (let i = 0; i<arguments.length; i++){
//     total += arguments[i]
// }
for (const key in arguments){
    total += arguments[key]
}
return total
}

console.log(sum(10,20,30))
console.log(sum(10,20))