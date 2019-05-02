
// Multiple values can be returned from a function either as an array or an object
function evenOdds(numbers){
    let evens = [], odds = []
    numbers.forEach(function(n){
        if (n%2==0){
            evens.push(n)
        }else{
            odds.push(n)
        }
    })
    //return [evens, odds]
    // consise object properties - Es6
    // if the property name and the variable name is the same, we can eliminate using the property and just use variable name
    return {
        evens,//evens: evens, 
        odds //odds: odds
    }
}

console.log(evenOdds([10,15,20,25])) // [[10,20],[15,25]]