// array is list of different data type incase of JavaScript, We can have mixed
var days = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
console.log( days );

console.log( days[2]);

days[2] = 'Wed';
days[5]= 'Saturday'; //inserting new.
days[10] = 'A day in Mars';
console.log( days );
console.log(days[8]);
console.log(days[11]); //its out of bounds but does not throw an error, (undefined).

console.log( days.length); //length of an array.


//Declaring array with diff types
var dummyArray = [
    'hello', 1, true, null
];
console.log( dummyArray );


//2D array
var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12,13,14]
];
console.log( matrix[1][2]);
console.log( matrix[2][4]);
console.log( matrix[2][5]);
