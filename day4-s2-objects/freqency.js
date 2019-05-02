const str = 'bcaabccccd'

function frequency(str) {
    const output = {}
    for(let i = 0; i < str.length; i++) {
        if(output.hasOwnProperty(str[i])) { 
            output[str[i]] += 1
        } else {
            output[str[i]] = 1
        }
    }
    return output
}

const result = frequency(str)
console.log(result)

// for of - array && strs 
// for in - objects
// for loop - array && strs
// forEach - array
