function findMax(){
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

let x = findMax(12314, 34546, 245245, 535634, 4242462, 235245246, 6535635635);
console.log(x);


function sumAll(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

let y = sumAll(121,12213, 3424, 435353, 353452);
console.log(y);