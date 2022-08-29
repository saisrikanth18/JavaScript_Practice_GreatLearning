/* console.log(sum(23, 7)); //it will be okay, and prints here */
// function declaration syntax
function sum( x, y ){
    var result = x+y;
    return result;
}
var result = sum(12, 13);
console.log("Result is",result);

/* console.log(sum2(14, 15)); //it will give error. */
// function expression syntax (more like variable declaration and assignment)
var sum2 = function( x, y ){
    var result = x+y;
    return result;
}
console.log(sum2(13,14));