const a = 10;
const b = -20;

console.log(a > 11 || b < 0);

function A(){
    console.log("You are welcome.....");
    return false;

}

function B(){
    console.log("You are invited......");
    return true;
}

console.log(A() || B());