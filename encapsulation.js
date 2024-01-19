class Bank{
    constructor(name,acc_no,balance){
        this.name=name,
        this.acc_no=acc_no
        let _balance=balance;
 this.info=function(){
    console.log("Account name:",this.name);
    console.log("Account Number:",this.acc_no);
    console.log("Account balance:",this.getbalance);
 };
 this.deposite=function(amt){
    _balance +amt;
 }
 this.withdraw=function(amt){
    _balance -= amt;
 }
 this.updated=function(amt){
    console.log("current balance:", _balance)
 }
 this.getBalance=function(){
    return _balance
 }
    }
}