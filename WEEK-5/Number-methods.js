console.log( Number.parseInt( "3.56", 10));
console.log( Number.parseInt( "a", 16));

console.log( Number.parseFloat("3.56", 10))

//useful for currency values
var wrappedNumber = new Number(3.5648);
console.log( wrappedNumber.toFixed(2));

console.log( 3.5678.toFixed(3)); //instead of above 2 lines we can do this.

//isNaN
var x = 1/'hello';
console.log(isNaN(x));
console.log(Number.isNaN(x));

console.log( NaN === NaN); //to over come with this we use above one isNaN.
