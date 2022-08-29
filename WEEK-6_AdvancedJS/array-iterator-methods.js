var days = [
    {day: 'sunday', hours: 7},
    {day: 'monday', hours: 5},
    {day: 'tuesday', hours: 8},
    {day: 'wednesday', hours: 10},
];

days.forEach(function(items){
    console.log( items );
    // console.log(items.hours);
});
/* var resultHours = days.map(function(items){
    return items.hours;
});
console.log( resultHours ); */

//filter
var resultDays = days.filter(function(items){
    return items.hours >= 8;
});
console.log( resultDays );

//Map
var numbers = [1, 2, 3, 4];
var resultArray = numbers.map(function(items){
    return items*items;
});
console.log( resultArray );

//some, every, reduce.