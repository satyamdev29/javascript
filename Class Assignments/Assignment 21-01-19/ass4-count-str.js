// Write a JavaScript function to count the occurrence of a substring in a string. 
// Test Data :
// count("The quick brown fox jumps over the lazy dog", 'the')
// Output :
// 2
// count("The quick brown fox jumps over the lazy dog", 'fox');
// Output :
// 1

function countWord(str,word){
    let count = 0
    const words = str.split(' ')
    for (let i = 0; i < words.length; i++){
        if (word.toLowerCase() == words[i].toLowerCase()) {
            count = count + 1
        }
    }
    return count
}
console.log(countWord('today is is a sunday', 'is'))