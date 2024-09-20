class BankAccount{
    constructor(holdername,balance){
        this.holdername = holdername;
        this.balance = balance;
    }

    checkbalance(){
        console.log(`Account balance for ${this.holdername}: Rs.${this.balance}`);
    }

    deposit(amount){
        if (amount > 0 ) {
            this.balance += amount
            console.log(`Deposited ${amount}. New Balance: Rs.${this.balance}`);
        } else {
            console.log(`Invalid Deposit Amount. Please enter a positive amount`);
        }
    }

    withdraw(amount){
        if(amount > 0){
            if (amount <= this.balance) {
                this.balance -= amount
                console.log(`Withdrawn Rs.${amount}. New Balance: Rs.${this.balance}`);
            } else {
                console.log(`Insufficient funds for withdrawal`);
                
            }
        }else{
            console.log(`Invalid Withdrawal Amount. Please enter a positive amount`);  
        }
    }

}

const myaccount = new BankAccount('Mithun',1000)
myaccount.checkbalance()
myaccount.deposit(500)
myaccount.deposit(-500)
myaccount.withdraw(-500)
myaccount.withdraw(500)
myaccount.checkbalance()
myaccount.withdraw(1500)