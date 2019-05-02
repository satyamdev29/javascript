const superHeroes = [
    {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
        ]
    },
    {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
        ]
    }
]


function superPower(superHeroes, hero) {
    let output = ''
    for(let i = 0; i < superHeroes.length; i++) {
        if(superHeroes[i].name == hero) {
            output = superHeroes[i].powers.join(', ')
        }
    }
    return output
}

const result = superPower(superHeroes, "Molecule Man")
console.log(result)