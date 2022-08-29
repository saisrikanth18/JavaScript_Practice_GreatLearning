var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
];
days.sort();
days.reverse();

console.log( days );

console.log(days.indexOf( 'Monday' )); //position of element
console.log(days.indexOf( 'Saturday' )); //if we give diff element then it will show -1