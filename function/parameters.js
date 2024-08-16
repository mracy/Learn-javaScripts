function parameters(parameter1, parameter2, parameter3){
    if(typeof parameter1 === "number" && typeof parameter2 === "number" && typeof parameter3 === "number"){
        const sum = (parameter1 + parameter2 + parameter3);

        console.log(`The sum of parameters ${parameter1}, ${parameter2} and ${parameter3} is ${sum}`);
}else{
    console.error(`The parameter must be number`);
}
    }

    parameters(5, 5, 7);

    
