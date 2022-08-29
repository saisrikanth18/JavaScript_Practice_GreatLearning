//setting prototype and inheriting another obj is almost same

var obj = {
    x: 1
};

var proto = {
    y:2
};

console.log(Object.getPrototypeOf(obj));

Object.setPrototypeOf(obj, proto);
console.log(obj);

var obj2 = {
    z: 10
};
Object.setPrototypeOf(obj, proto);
console.log(obj2);