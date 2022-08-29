var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
];

days.push( 'Saturday' );
days.push( 'Sunday' );
//we can also push multiple at once
days.push('Jan', 'Feb', 'Mar');
days.sort();

console.log( days );

days.pop();
var removedDay = days.pop();
console.log( removedDay );