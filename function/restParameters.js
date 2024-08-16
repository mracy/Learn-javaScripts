function sum(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
        return sum;
}
    
    let x = sum(12,34,54,65,12,34,56,789);

console.log(`The sum of the number is ${x}`);