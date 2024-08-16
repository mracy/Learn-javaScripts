function myFunction(x, y){
    if (y === undefined){
        y = 2;
    }
    const result = x + y;

    console.log(`The sum of my function is ${x} and ${y} is ${result}`);
}

myFunction(5);
myFunction(10, 6);

