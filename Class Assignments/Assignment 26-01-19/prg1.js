var a = [[1, 2], [8, 11]];
// Using forEach()
a.forEach(function(getList){
    console.log('row\n'+getList[0] +'\n' + getList[1])
})

// Using for loop
function printArray(getList) {
    //return console.log((getList.length));
    for( let i = 0; i<=getList.length; i++){
        for (let j=i; j<=getList.length; j++){
            return (getList[i][j]);
        }
    }
    
   }