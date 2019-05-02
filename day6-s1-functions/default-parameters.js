//es5 syntax

function add(n1, n2){
    n1 = typeof n1 === 'undefined' ? 0 : n1
    //n2 = n2 === ? 0 : n2
    //n2 = typeof n2 === 'undefined' ? 0 : n2
    n2 = n2 || 0
    return n1 + n2
}

console.log(add()) // 0
console.log(add(10)) // 10
console.log(add(10,20)) // 30
console.log(add(10,20,50)) //30
console.log(add(undefined,20))

//es6 syntax
// setting the default parameter
function sum(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(sum()) // 0
console.log(sum(10)) // 10
console.log(sum(10,20)) // 30
console.log(sum(10,20,50)) //30
console.log(sum(undefined,20))