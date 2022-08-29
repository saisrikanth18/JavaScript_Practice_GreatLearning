try {
    foo();
    console.log("after call to foo(within try block)");
} catch (error) {
    console.log( error.message );
} finally{
    //it will be called irrespective of code errors
    console.log("Inside finally block");
}

console.log("after foo called");