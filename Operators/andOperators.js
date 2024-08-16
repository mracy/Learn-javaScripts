function A(){
    console.log("A is called");
    return false;
}

function B(){
    console.log("B is called");
    return true;
}

console.log(A() && B());