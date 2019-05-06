function printPrime(limit) {
    var i = 0;
    var j = 0;
    //loop till i equals to $limit
    for (i = 1; i <= limit; i++) {
        count = 0;

        for (j = 1; j <= i; j++) {
            // % modules will give the reminder value, so if the reminder is 0 then it is divisible
            if (i % j == 0) {
                //increment the value of  return
                count++;
            }
        }
        //if the value of  return is 2 then it is a prime number
        //because a prime number should be exactly divisible by 2 times only (itself and 1)
        if (count == 2) {
            console.log(i);
        }
       
    }
    return
}

var limit = 50;

console.log(printPrime(limit))