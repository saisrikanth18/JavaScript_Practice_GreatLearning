var sholey = {
    "name": 'Sholey',    
    cast: [
        'Amitabh', 'Hema', 'Dharmendra', 'Jaya'
    ],
    "box office stats": {
        countries: 10,
        collection: 12300000
    },
    addToCollection: function( amount ){
        this["box office stats"].collection += amount; //incase if we change object still it works.
    }
};

console.log( sholey.name );
console.log( sholey.cast[1] );
console.log( sholey["box office stats"]["collection"]); //To access keyvalues with spaces or special characters. and also inside it.
//or
console.log( sholey["box office stats"].collection); 

sholey.addToCollection( 35000 );

// we can add or delete any property.
sholey.villain = 'Gabbar Singh';

sholey.addToCast = function( newMember ){
    this.cast[this.cast.length] = newMember;
};
sholey.addToCast( 'Sanjay' );
sholey.addToCast( 'Amjad' );

//delete some property or keyvalue
delete sholey["box office stats"];
console.log(sholey.song);

console.log( sholey );