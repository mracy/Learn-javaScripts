function getFree(isMember){
    return isMember ? "$2.00" : "$10.00";
}

console.log(getFree(true));
console.log(getFree(false));
console.log(getFree(null));

///


const age = 30;

const Salamander = age >= 40 ? "hard drink" : "hard drink"; 

console.log(Salamander);

const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
    
} 

console.log(greeting({name: "Alice"}));
console.log(greeting(null));

///


function gradeScore(score){
    return score > 90 ? "A" :
    score > 89 ? "B" : score > 88 ? "C" : "F";
}
console.log(gradeScore(95));
console.log(gradeScore(90));
console.log(gradeScore(70));

/////


function example(input){
    return input < 10 ?
    "Value is less than 10":
    (input >= 10 && input < 20) ?
    "Value is in between 10 to 20" :
    (input >= 20 && input < 40) ? 
    "Value is in between 20 to 40" :
    "Value is 40 or more";
}

console.log(example(5));
console.log(example(15));
console.log(example(30));
console.log(example(45));