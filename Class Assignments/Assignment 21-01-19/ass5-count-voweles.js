// Create the function vowelCount(str) that takes a str parameter and returns the number of vowels the string contains (ie. "Dct Academy" would return 3).
// Examples:
// INPUT: vowelCount("Good Job");
// OUTPUT: 3
// INPUT: vowelCount('Yankees');
// OUTPUT: 3
// INPUT:vowelCount('symphysy');
// OUTPUT:0

function vowelCount(str){
   let count = 0
   str = str.toLowerCase()
 //return(console.log(str.length))
 if(str.length==0){
     return 'Empty String'
 }
 for(let i = 0; i<=str.length; i++){
     //console.log(str[i])
     //let stringLower = str[i]
     if((str[i]=='a') || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
         count = count + 1
     }
}
return count
}
console.log(vowelCount("AeEiou"))
console.log(vowelCount("Good Job"))
console.log(vowelCount('Yankees'))
console.log(vowelCount('symphysy'))
console.log(vowelCount(''))
console.log(vowelCount('Dct Academy"'))