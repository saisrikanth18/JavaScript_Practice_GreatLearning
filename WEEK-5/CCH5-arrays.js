var numbers = [33,45,2,88,36,17,81,50,28];
console.log( numbers );

//Sort and print the original array  in lexicographical order.
numbers.sort();
console.log("Array sorted in Lexicographical order: ");
console.log( numbers );

//Sort and print the numbers in the ascending order and print them.
numbers.sort(function( x, y ){
    return x-y;
});
console.log("Array Sorted in Ascending order :");
console.log( numbers );

//Add two more numbers to the array 105,501.
numbers.splice(3,0, 105, 501);
console.log( numbers );

//Sort the array again and make an array of the largest five numbers from the above array using array’s methods.
numbers.sort(function( x, y ){
    return x-y;
})
console.log( numbers );
var lastFiveNumbers = numbers.slice(6);
console.log( lastFiveNumbers );
