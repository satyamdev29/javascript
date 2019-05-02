/*
create a object to specify data of a customer in a bank. The data to be stored is: Account Number, Name, Balance. Assume a maximum of 200 customers in the bank

create a method called as transaction which takes 2 args amount and code (1 for deposit, 0 for withdraw )
Create a method to display the current balance for the customer
If the withdraw amount is more than the balance then display "The balance is insufficient for the specified withdrawal"
*/

const customer = {
    name: 'manju',
    balance: 1000,
    accNo: 'sb123', 
    displayBalance: function(){
        return `The current balance - INR ${this.balance}`
    },
    transaction: function(amount, code){
        if(code == 1) {
            this.balance += amount
            return this.displayBalance()
        } else if( code == 0) {
            if(amount > this.balance) {
                return 'insufficient funds'
            } else {
                this.balance -= amount 
                return this.displayBalance()
            }
        } else {
            return 'invalid input'
        }
    }
}

console.log(customer.displayBalance())
console.log(customer.transaction(500,1))
console.log(customer.transaction(5000, 0))
console.log(customer.transaction(750, 0))

console.log(customer.transaction(750, 3))


// console.log(customer.transaction(500, 1)) // depositing - 1500
// console.log(customer.transaction(5000, 0)) //  // insufficient funds
// console.log(customer.transaction(500, 0)) //  // 1000

