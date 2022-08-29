//arithmetic operators
var x = 40, y = 58;

var sum = x + y; 
var difference = y - x; 
var multiplicaiton = x * y; 
var expo = x ** y; 

console.log("Sum is:", sum); 
console.log("Difference is:", difference);
console.log("Multiplication is:", multiplicaiton); 
console.log("Power of 40 58 times is:", expo);

console.log(" ")

// relational operatorsvar 
console.log("Both number are equal and have same data type : ", x === y );
console.log("First Number is greater than second : ", x > y );
console.log("Second number is greater than first one : ", y > x );

console.log(" ")

// logical operators
var saturday = false, sunday = true; 
var weekend = saturday || sunday;
console.log( "Is today weekend : ", weekend );

var freetime = true;
console.log( "Can I go to park today : " , freetime && weekend );