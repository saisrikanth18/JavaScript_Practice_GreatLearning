console.log( Math );
console.log( Math.random() );

//Max and Min
console.log( Math.min(23, 45, 67, 78, 2, 99) );
console.log( Math.max(23, 45, 67, 78, 2, 99) );

var numbers = [23, 45, 67, 78, 2, 99];
console.log( Math.min.apply(null, numbers));

//ceil
console.log( Math.ceil( 3.5 ));

//floor
console.log( Math.floor( 3.5 ) );

//power
console.log( Math.pow(2,3) );

//round
console.log( Math.round(4.3) );