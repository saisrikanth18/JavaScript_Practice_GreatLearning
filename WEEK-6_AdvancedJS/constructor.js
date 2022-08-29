function person( name, age ){
    this.name = name;
    this.age = age;
}

person.prototype.celebrateBirthday = function(){
    this.age++;
};
/* var john = {
    name: 'john',
    age: 32,
    celebrateBirthday: function(){
        this.age++;
    }
};
var mary = {
    name: 'mary',
    age: 32,
    celebrateBirthday: function(){
        this.age++;
    }
}; */

//problem with this is when we create new object every time celebrate function will be called repeatedly, that is waste of space.
var john = new person( 'John', 32);
john.celebrateBirthday();
console.log( john );
var mary = new person( 'mary', 43);
mary.celebrateBirthday();
console.log( mary );

console.log(john.__proto__ === person.prototype);