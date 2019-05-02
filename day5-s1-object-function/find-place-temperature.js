//node place.js bangalore
// bangalore (lat, lng) - current temperature - 25c

const axios = require('axios')
const key = 'AIzaSyAjhH-5OzObMll7shQgtXB0iMnr0FMKwwc'
const place = process.argv[2]
geoURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${place}&inputtype=textquery&fields=geometry&key=${key}`

//console.log(geoURL)
weatherURL = `https://api.darksky.net/forecast/158002330a7540e2f653f53af824fd93/`

axios.get(geoURL)
    .then(function(response){ // this function only will called when get response from server - Asyncronous javascript
        const data = response.data;
        const latitude = data.candidates[0].geometry.location.lat
        const longitude = data.candidates[0].geometry.location.lng
        console.log(place,latitude,longitude)
        axios.get(`${weatherURL}${latitude},${longitude}`)
            .then(function(response){
                const data = response.data
                //console.log(data)
                console.log('f', data.currently.temperature)
            })
            .catch(function(err){
                console.log(err.message)
            })
    
    })
.catch(function(err){
console.log(err.message)
})

