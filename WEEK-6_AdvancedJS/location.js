console.log( location );
console.log( location.protocol );
console.log( location.path );

location.href = 'https://www.google.com';

location.assign( 'https://www.google.com' );

//this will replace the history stack with previous one
location.replace( 'https://www.google.com' );