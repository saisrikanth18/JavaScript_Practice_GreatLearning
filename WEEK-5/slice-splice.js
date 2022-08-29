// splice means we can delete from particular index to index, and also we can add from that index
var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
];
console.log( days );

// days.splice( 2, 3 );
days.splice( 2, 2, 'Jan', 'Feb', 'Mar');
console.log( days );

var copiedDays = days.slice(2, 4 ); //if you don't give end index then up to end it will copy. 
console.log( copiedDays );
console.log( days );