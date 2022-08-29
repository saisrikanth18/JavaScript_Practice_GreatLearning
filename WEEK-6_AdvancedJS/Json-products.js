const strProducts = `[
    {
        "name": "Hammer",
        "description": "A claw Hammer",
        "price": 120,
        "rating": {
            "min": 2,
            "max": 3
        }
    },
    {
        "name": "Video game controller",
        "description": "A video game controller",
        "price": 15000
    }
]`;

//converting above string to an array
var products = JSON.parse( strProducts );

var newProduct = {
    name: "buisuits",
    "description": "Whole wheat buisuits",
    price: 30
};
products.push( newProduct );
console.log( products );

var strProductsSendBack = JSON.stringify( products );
console.log( strProductsSendBack );