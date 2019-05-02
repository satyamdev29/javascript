
function stringChop(str,count){
    //console.log(count)
    if(count==undefined){
        return str.slice('').split() 
    }
    let newString
    for (let i =0; i<=str.length-1; i++){
        newString + str.slice(str,count).split()
    }
    return newString
}



//console.log(stringChop('resource')); //return ["resource"]

console.log(stringChop('resource',2)); //return [ "re", "so", "ur", "ce"] 

//console.log(stringChop('dcresource',3)); // return ["dcr", "eso", "urc", "e"]
