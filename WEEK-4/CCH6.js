var smartPhone = 30000, accountBal = 25000, creditcard = 3000;
var required = smartPhone - (accountBal+creditcard);
if(smartPhone < accountBal){
    console.log("I can buy the phone");
} 
else if(smartPhone < (accountBal+creditcard)){
    console.log("I can purchase the phone with the help of credit card");
}
else{
    console.log("I cannot buy the phone");
    console.log(required + " required to buy a phone");
}