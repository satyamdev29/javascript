// node distance.js bangalore mysore

//required(axios)
//setup key
//setup url hhtps://maps.googleapis.com/maps/api/distancematrix/json?origins=bangalore&destinations=mysore&key=AIzaSyAjhH-5OzObMll7shQgtXB0iMnr0FMKwwc
//axios.get()
//response comes back console log the string
//The distance between bangalore and mysore is 150kms and the time taken to travel is 3 hours 30 mins.

const axios = require('axios')
url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=bangalore&destinations=mysore&key=AIzaSyAjhH-5OzObMll7shQgtXB0iMnr0FMKwwc`
axios.get(url)

.then(function(response){ // this function only will called when get response from server - Asyncronous javascript
    const data = response.data;
    console.log('From '+data.origin_addresses +' To '+data.destination_addresses)
    console.log('Total KM is '+data.rows[0].elements[0].distance.text)
    console.log('Total Duration is '+data.rows[0].elements[0].duration.text)

    // using ES6
    console.log(`From ${data.origin_addresses} To ${data.destination_addresses} is ${data.rows[0].elements[0].distance.text} and total duration is ${data.rows[0].elements[0].duration.text}`)
    })
.catch(function(err){
console.log(err.message)
})