const users = [
    {id: 1, img:'./img/male.png', name:'satyam', email:'satya@gmail.com'},
    {id: 2, img:'./img/male.png', name:'satyam', email:'satya@gmail.com'},
    {id: 3, img:'./img/male.png', name:'satyam', email:'satya@gmail.com'},
    {id: 4, img:'./img/male.png', name:'satyam', email:'satya@gmail.com'}
]


// for(let i=0; i<users.length;i++){
//     console.log(users[i].img, users[i].name, users[i].email)
// }

// console.log(users.filter(user => user.img ))

users.map(function(user, index){
    return console.log(user.id, user.img, user.name, user.email)
})