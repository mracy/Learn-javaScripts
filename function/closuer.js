function outerFunction(x){
    var innerVar = 4;
    function innerFunction(){
        return x + innerVar;
    }
    return innerFunction;
}

var clouser = outerFunction(2);
console.log(clouser());

//const myFunction = outerFunction(3);
//console.log(myFunction());

///


function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    }
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());


/////

const a = "Hello";

console.log(a);

abc();

function abc(){
    //const a = "world";
    console.log(a);
}

///////



function myCount(){
    let count = 0;
    return function(){
        return count++;
    }
}

function myCount2(){
    let count = 0;
    return count++;
}

for (let x = 0; x < 10; x++) {

let cnt = myCount();
let cnt2 = myCount2;

console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());


console.log(cnt2());
console.log(cnt2());
console.log(cnt2());
console.log(cnt2());

}

//////

function makeAdder(x){
    return function(y){
        return x + y;
    }
}

let add5 = makeAdder(5);
console.log(add5(3));
console.log(add5(8));

let add10 = makeAdder(10);
console.log(add10(4));
console.log(add10(7));
