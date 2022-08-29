var today = new Date();
console.log( today );

var milleniumStart = new Date(2000, 0, 1);
console.log( milleniumStart );

today.setDate( today.getDate() + 1);
console.log( today );

var july31 = new Date(2022, 6, 31, 5, 30);
console.log( july31);
// july31.setDate( july31.getDate() + 1);
// console.log( july31 );


//Getters in Date object.
console.log( july31.getMonth() ); //0,1,2,.......11
console.log( july31.getDay() ); //sunday0. monday1, .....Saturday6.
console.log( (new Date()).getDay() );

//Setters in Date object.
var today = new Date();
console.log( today );

today.setDate( 9 );
console.log( today );

today.setFullYear( 2025 );
console.log( today );

console.log( today.toTimeString() );
console.log( today.toDateString() );
console.log( today.toLocaleDateString() );
console.log( today.toLocaleString() );
console.log( today.toUTCString());
console.log( today.toJSON());
console.log( today.toString());
console.log( today.toLocaleTimeString());