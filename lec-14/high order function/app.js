function outer(inner) {
    console.log("hi i am inside outer func");
    inner();
}

let a = function inner() {
    console.log("hi i am inside innder fun");
}


outer();