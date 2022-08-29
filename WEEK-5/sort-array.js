//Sorting an Array.
var number = [ 20, 45, 67, 35, 890, 12, 65, 33, 5000 ];
number.sort(function(x, y){
    return x-y;
});
console.log(number);


number.sort(function(x, y){
    return y-x;
});
console.log(number);


//Some complex things
var projects = [
    {hours: 20, name: 'project 1'},
    {hours: 40, name: 'project 2'},
    {hours: 35, name: 'project 3'},
    {hours: 80, name: 'project 4'},
    {hours: 15, name: 'project 5'}
];
projects.sort(function( x,y ){
    return x.hours - y.hours;
});
console.log( projects );