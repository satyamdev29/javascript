// function scope
//var is function scope
function number(){
    var n1 = 10
    var n2 = 20
    if(n1>n2){
        var msg ='n1 is greater'
    }else{
        var msg ='n2 is greater'
    }
    console.log(msg)
}
number()


// block scope
// let & const block scope
function greater(){
    let a1 = 10
    let a2 = 20
    if(a1>a2){
        let result ='a1 is greater' // let result we cannot acess outside block. you can see result color also changed
    }else{
        let result ='a2 is greater'
    }
    console.log(result)
}
greater()

function greater1(){
    let a1 = 10
    let a2 = 20
    let result // best practice always to declare let outside scope and assign inside block
    if(a1>a2){
        result ='a1 is greater' //Assigned inside block
    }else{
        result ='a2 is greater'
    }
    console.log(result)
}
greater1()

