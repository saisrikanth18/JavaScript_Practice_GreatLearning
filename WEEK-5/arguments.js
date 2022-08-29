// argument is an object of a function
function foo(x,y,z){
    console.log(x,y,z);
    
    //aergument object
    console.log( arguments);
    console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
    console.log(arguments.length);
}
foo('hello', 'world', 'good', 'morning');