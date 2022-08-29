function sum( x, y ){
    if( typeof x === 'number' && typeof y === 'number'){
    return x+y;
    }
    throw new Error("Here arguments should be numbers");
}

try{
    console.log(sum(12, 'hello'));
} catch(error){
    console.log(error.message);
}