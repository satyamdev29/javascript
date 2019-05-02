const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'
// promise object very importaint ********
axios.get(url)

// .then , .catch its part of promises these are metods

.then(function(response){ // this function only will called when get response from server - Asyncronous javascript
   // console.log(respose)
    //console.log(respose.data)
    const users = response.data;
    users.forEach(function(user){
        console.log(`${user.id}. ${user.name} - ${user.email}`)
    })
}) // success

.catch(function(err){
   // console.log(err)
    console.log(err.message)
}) // failure