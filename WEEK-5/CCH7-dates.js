//Create a date object of the date (6 Jun, 2021)
var today = new Date( 2021, 5, 6);
console.log( today );

//Create a date object of the year 2000 to do the next operation.
var date1 = new Date( 2000, 0, 1 );
console.log( date1 );

//Check whether the given date(6 Jun,2021) is after or in the year 2000.
var date2 = new Date( 2021, 5, 6);
console.log( date2 );

if(date2>date1){
    console.log("Given date is after or in the 2000 year");
}else{
    console.log("Given date is not after or in the 2000 year");
}
    console.log();