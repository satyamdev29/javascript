//
// dummy data storage - DB
const products = []
// properties - id, name, price, category 
// methods - 
// instance methods - save() 
// static methods - findById(), findByIdAndUpdate(), findByIdAndDelete(), findAll(), count()
function Product(data) {
    this.id = data.id 
    this.name = data.name 
    this.price = data.price 
    this.category = data.category 
    this.save = function(){
        products.push(this)
    }
    this.details = function(){
        return `${this.id}. ${this.name} - ${this.price} - ${this.category}`
    }
}

// static methods
Product.findAll = function(){
    return products
}

Product.findById = function(id){
    return products.find(function(product){
        return product.id === id 
    })
}

Product.findByIdAndUpdate = function(id, data){
    const product = products.find(function(product){
        return product.id === id 
    })
    if(product) {
        Object.assign(product, data) 
        return {
            product: product, 
            notice: 'successfully updated the product'
        }
    } else {
        return 'product not found'
    }
}

// Product.count() // 

// Product.findByIdAndDelete() 

// Product.findByCategory('sports')

const p1 = new Product({ id: 1, name: 'marker', price: 15, category: 'stationary'})
p1.save() 

const p2 = new Product({ category: 'sports', id: 2, price: 150, name: 'racket'})
p2.save()

const p3 = new Product({ category: 'stationary', id: 3, price: 150, name: 'white board' })
p3.save()

// DISPLAY ALL THE PRODUCTS 
// console.log(Product.findAll())
// Product.findAll().forEach(function(product){
//     console.log(product.details())
// })

// FIND ONE PRODUCT 
// const product = Product.findById(10) 
// if(product) {
//     console.log(product.details())
// } else {
//     console.log('product not found')
// }

// FIND ONE AND UPDATE
console.log(Product.findByIdAndUpdate(1, { price: 25}))


// console.log(products)


// products = []
// const p1 = new Product() 
// p1.save() // saving operation // 

// Product.findById(1)
// Product.findByIdAndUpdate(1, {})
// Product.findAll() 
// Product.count() 
// Product.findByIdAndDelete(1)



// users = []
// user.save()
// User.findByCredentials() 
