function clearArray(values) {
    if(values.length==0){
        return 'Invalid input'
    }
    const output = []
    for(let i = 0; i < values.length; i++ ){
        if(values[i]) {
            output.push(values[i])
        }
    }
    return output
}

const result = clearArray([NaN, 0, 15, false, -22, '', undefined, 47, null])
// [15, -22, 47]
console.log(result)


// truthy values - !falsy - [], {}
// falsy values - NaN, 0, false, '', undefined, null 

// const values = [NaN, 0, 15, false, -22, '', undefined, 47, null, [], {}, true, 1]
// const truthy = [], falsy = []
// for(let i = 0; i < values.length; i++ ){
//     if(values[i]) {
//         truthy.push(values[i])
//     } else {
//         falsy.push(values[i])
//     }
// }

// console.log('truthy', truthy)
// console.log('falsy', falsy)