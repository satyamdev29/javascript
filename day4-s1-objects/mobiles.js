const mobiles = ['8095537169', '9739093029', '9505050050']

console.log(mobiles[Math.round(Math.random())])

const city = {
    // key: value
    name: 'bangalore',
    minTemp:23.5,
    placesToVisit: ['mg road', 'brigade road']
}

const restaurant = {
    name: '1947',
    location: ['jayanagar', 'vijaynagar'],
    type: 'casual dining',
    rating: 4.1,
    cuisines: ['North Indian', 'Chinese'],
    features: {
        'Home Delivery': true,
        'Veg Only': true,
        'Alcohol': false
    },
    reviews:[
        {
            name: 'Suraj',
            createdAt: '25-01-2019',
            body: 'ok place',
            rating: 4
        }
    ]
}

console.log(restaurant.name)
console.log(restaurant['location'])
console.log(restaurant.reviews.length)
console.log('Listing Reviews')

for (let i=0; i<restaurant.reviews.length; i++){
    console.log(restaurant.reviews[i].name, restaurant.reviews[i].body)
}

restaurant.reviews.forEach(function(review){
    console.log(review.name, review.body)
})