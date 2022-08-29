// functions without name or assigning function to a variable.
const sum = function(x,y,cb){
    var result = x+y;
    cb(result);
}

sum(10, 20, function(result){
    console.log(result);
});

//
var func=function(x,y,f)
{
    f(x+y);
}

function print(result)
{
    console.log(result);
}
func(5,4,print);