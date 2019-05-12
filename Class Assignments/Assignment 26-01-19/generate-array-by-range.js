
function rangeBetween(num1,num2){
    genArray=[]
for (let i =num1; i<=num2; i++){
    genArray.push(i)
}
return genArray
}

console.log(rangeBetween(4,7))
console.log(rangeBetween(-4,7))