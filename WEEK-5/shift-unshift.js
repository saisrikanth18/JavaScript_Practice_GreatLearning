var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
];

//unshift means it will add at beginning.
days.unshift( 'Holiday' );
console.log( days );

//shift means removes from beginning of the array.
days.shift();
var removedDay = days.shift();
console.log( removedDay );
console.log( days );