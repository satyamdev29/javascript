const string = 'make in india'

function hashTagGenerator(str) {
    let output = '#'
    const words = str.split(' ')
    for( let i = 0; i < words.length; i++ ){
        output += words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return output
}

const result = hashTagGenerator(string)
console.log(result)