var x = 'hello';
var y = 100;

// Check if x can be converted to a number
var xAsNumber = Number(x);

if (isNaN(xAsNumber)) {
    console.warn("Cannot perform arithmetic operation: 'x' is not a number.");
    alert("Error: 'x' is not a number.");
} else {
    alert(xAsNumber * y); // This will work if x is a valid number
}

// Debugging the result of x * y
console.log("Result of x * y:", x * y);
