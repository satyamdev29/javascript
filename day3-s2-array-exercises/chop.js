function stringChop(a, b) {
    let output = []
    for(let i = 0; i < a.length; i = i + b ){
        output.push(a.substr(i, b))
    }
    return output
}

console.log(stringChop('resource', 3))