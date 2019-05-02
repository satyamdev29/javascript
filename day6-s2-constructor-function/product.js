//
// dummy data storage - DB
const products = []
// properties - id, name, price, category
// methods - 
// instance methods -  save()
// static methods - findById(), findByIdAndUpdate(), findByIdAndDelete(), findAll(), count()
function Product(data){
    this.id = data.id
    this.name = data.name
    this.price = data.price
    this.category = data.category
    this.save = function(){
        products.push(this)
    }
    this.details = function(){
        return `${this.id}.${this.name} - ${this.price} - ${this.category}`
    }
}

// static methjods
Product.finAll=function(){
    return products
}

Product.findById = function(id){
    return products.find(function(product){
        return product.id===id
    })
}

Product.findByIdAndUpdate = function(id, data){
    const product = products.find(function(product){
        return product.id === id
    })

    if(product){
        Object.assign(product, data)
        return {
            product: product,
            notice: 'Sucessfully updated the product'
        }
    }else{
        return 'Product not found'
    }
}

// Product.count()//
// Product.findByIdAndDelete()
// Product.findByCategory('sports)

const p1 = new Product({id:1, name: 'marker', price:15, category:'stationary'})
p1.save()
const p2 = new Product({id:2, name: 'Racket', price:150, category:'Sports'})
p2.save()
const p3 = new Product({category:'Stationary',id:3, price:150, name: 'White Board'})
p3.save()


//console.log(Product.findById(3))
//console.log(Product.findByIdAndUpdate())

// DISPLAY ALL THE PRODUCTS
//console.log(Product.finAll())

// FIND ALL THE PRODUCTS
// Product.finAll().forEach(function(product){
//     console.log(product.details())
// })

// FIND ONE PRODUCTS
// const product = Product.findById(3)
// if(product){
//     console.log(product.details())
// }else{
//     console.log('product not found')
// }

//FIND ONE AND UPDATE
//console.log(Product.findByIdAndUpdate(1,{price:25}))

// console.log(products)