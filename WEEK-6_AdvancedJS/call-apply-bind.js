//functions are objects
function greet( message, name){
    console.log( this );
    console.log( message+' '+name+'!');
}
greet('Good morning', 'John');

console.log( greet instanceof Object);

greet.x = 100;
console.log(greet.x);

greet.foo = function() {
    console.log('greet.foo was called');
};
greet.foo();

//Call
greet.call('Hello', 'Good evening', 'Mary');

//Apply
var args = ['Good evening', 'Mary'];
greet.apply('hello', args);

greet.apply(null, args);

//Bind
var greetBound = greet.bind( 'world');
greetBound( 'hello', 'Ram');

var greetHola = greet.bind(null, 'Hola');
greetHola( 'Srikanth' );
greetHola( 'Shubham' );