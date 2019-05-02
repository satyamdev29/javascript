// assinment-1
var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };
    console.log(Object.keys(student))

//////////////////////////////////////////////////////////////////////////////////

//Assignment-2

    const str='aaabcdabc'

    function frequency(str){
       const output = {}
        //console.log(a);
 for (let i=0; i<str.length;i++){
    if(output.hasOwnProperty(str[i])){
            output[str[i]] +=1
        }
        else{
            output[str[i]] =1
        }
    }
    return output
 }

     const result = frequency(str);
     console.log(result)
// for of - array && strs
// for in - objects
// for loop - array && strs
// forEach - array 


/////////////////////////////////////////////////////////////////////////////////

  
//assignment3

var superHeroes = [
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

  function superPower(superHeroes, hero){
      let output = ''
      for (let i=0; i<superHeroes.length; i++){
          if(superHeroes[i].name==hero){
              output = superHeroes[i].powers.join(', ')
              return output
          }
          else{
              return 'Iron man is not in the super heroes list'
          }
      }
      return output
  }

  const results = superPower(superHeroes, "Molecule Man")
  console.log(results)

////////////////////////////////////////////////////////////////////////////////////

// assinment-4

      function checkObject(a,b) {
        return console.log(Object.keys(a).includes(b))
        //return console.log(a+b)
    }

    checkObject({'name':'gokul','city':'bangalore'},'age')

//////////////////////////////////////////////////////////////////////////////////