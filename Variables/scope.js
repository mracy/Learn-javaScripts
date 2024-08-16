// Global Scope
let globalVar = "I am global";

function outerFunction() {
    // Function Scope
    let outerVar = "I am in outerFunction";

    function innerFunction() {
        // Nested Function Scope
        let innerVar = "I am in innerFunction";

        console.log(globalVar);  // Accessible
        console.log(outerVar);   // Accessible
        console.log(innerVar);   // Accessible
    }

    innerFunction();
    
    console.log(globalVar);  // Accessible
    console.log(outerVar);   // Accessible
    console.log(innerVar);   // Error: innerVar is not defined
}

outerFunction();

console.log(globalVar);  // Accessible
console.log(outerVar);   // Error: outerVar is not defined
console.log(innerVar);   // Error: innerVar is not defined
