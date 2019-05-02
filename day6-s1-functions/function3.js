function add(){
    // if a vaibale is assigned to value, and if the variable is not there in the functional nor the global scope then, that vaiable is created in GS
    n1 = 100 //assignment its not declare
    n2 = 200
    return n1 + n2
}

console.log(add()) //300
console.log(n1,n2) // 100, 200