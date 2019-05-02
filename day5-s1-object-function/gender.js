const axios = require('axios')
const key = 'pRPLCejozFwCHFbVCR'
//const name = 'supriya'

// to read input while executing the files. Ex. D:\DCT\javascript\day5-s1-object-function> node gender.js satyam
const name = process.argv[2] // node gender.js satyam
const url = `https://gender-api.com/get?name=${name}&key=${key}` // Gender API

axios.get(url)

.then(function(response){ // this function only will called when get response from server - Asyncronous javascript
     const data = response.data;
            console.log(`The gender of ${name} is ${data.gender}`)
     })
 .catch(function(err){
console.log(err.message)
 })