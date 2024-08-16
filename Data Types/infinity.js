var a = 89;
var b = -98;
var z = 0;

// Handling division by zero
if (z === 0) {
    console.warn("Division by zero is not allowed.");
    alert("Division by zero is not allowed.");
} else {
    alert(a / z);
    alert(b / z);
}

// Debugging the alert function
console.log("alert function:", alert);
