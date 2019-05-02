const arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];

const sorted_arr = arr.slice().sort()

const result = []

for (i = 0; i<sorted_arr.length-1; i++){

    if(sorted_arr[i+1]===sorted_arr[i]){
        result.push(sorted_arr[i])
    }
}

console.log(result)