const str = 'hello world'
// count vowels - number
// aeiou
function countVowels(str){
    let count = 0
    str = str.toLowerCase()
    for(let i=0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'ao' || str[i] == 'u'){
            count+=1 // count++
        }
    }
    return count
}

const result = countVowels(str)//3
console.log(result)

const name = 'aniruddha'
function countTimes(str){
    const vowels = {
        a: 0, e: 0, i: 0, o: 0, u: 0
    }

    for(let i=0; i< str.length; i++){
        if(vowels.hasOwnProperty(str[i])){
            if(vowels.hasOwnProperty(str[i])){
                vowels[str[i]] +=1
            }
        }
    }
    return vowels
}

const result1 = countTimes(name)
console.log(result1)
