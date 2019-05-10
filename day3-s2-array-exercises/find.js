const numbers=[10,20,30,40,50]

console.log(numbers.indexOf(30)>=0)
console.log(numbers.includes(30))

//c style
// If we dont have option to use find() method then we'll assign nothing just declare as below let number.then we'll loop over anfd check the condition if its satisfied then we'll break; and return that number.
function findGreater25(numbers){
    let number
    for(let i =0; i<numbers.length; i++){
        if(numbers[i]>25){
            number=numbers[i]
            break;
        }
    }
    return number;
}

const result=findGreater25(numbers)
console.log(result)

// // js style
 
const result1= numbers.find(function(n){
    return n>20
})

console.log(result1)

console.log(numbers.find(n=>n>25))