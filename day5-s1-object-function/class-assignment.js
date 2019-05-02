/*
 */
const customer = {
    name: 'Satya Prakash',
    balance: 1000,
    accNo: 'SBI8346392324',
    displayBalance: function(){
        //this.balance
        return `The Current balance - INR ${this.balance}`
    } ,
    transaction: function(amount, code){
        if(code == 1){
            this.balance += amount
            return this.displayBalance()
        }else if(code ==0){
            if(amount > this.balance){
                return 'Insufficient funds'
            }else {
                this.balance -= amount
                return this.displayBalance()
                 
            }
        }else {
            return 'invalid input'
        }
    }
}

console.log(customer.displayBalance())

console.log(customer.transaction(500, 1)) // depositing - 1500
console.log(customer.transaction(500, 0)) // inssfficent funds
console.log(customer.transaction(5000, 0)) // 1000
console.log(customer.transaction(5000, 3)) // invalid input
