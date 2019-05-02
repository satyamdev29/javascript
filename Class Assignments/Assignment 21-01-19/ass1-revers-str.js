const text = ''

// //First way to reverse string
// function reverseString(str){
//     output = str.split("").reverse().join("")
//     return output
// }

// Second way to reverse string
function reverseString(str){
    if(str.length==0){
        return 'String is empty'
    }
    output = ''
    for( let i = str.length-1; i>=0; i--){
        output = output+str[i]
    }
    return output
}


console.log(reverseString(text))
