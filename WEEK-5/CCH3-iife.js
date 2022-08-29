//Rectangle
var rectangle = (function rectangleArea(length, width){
    var area = length * width;
    return area;
})(5,10);


//Square
var square = (function squareArea(side){
    var area = Math.pow(side, 2);
    return area;
})(10);



//Circle
var circle = (function circleArea(radius){
    var area = 3.14 * (Math.pow(radius, 2));
    return area;
})(7);

console.log("Area of Rectangle is", rectangle);
console.log("Area of Square is", square);
console.log("Area of Circle is", circle);