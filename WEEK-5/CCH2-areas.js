//Rectangle
function rectangleArea(length, width){
    var area = length * width;
    return area;
}
var area = rectangleArea(5, 10);
console.log("Area of Rectangle is", area);

//Square
function squareArea(side){
    var area = Math.pow(side, 2);
    return area;
}
var area = squareArea(5);
console.log("Area of Square is", area);

//Circle
function circleArea(radius){
    var area = 3.14 * (Math.pow(radius, 2));
    return area;
}
var area = circleArea(5);
console.log("Area of Circle is", area);