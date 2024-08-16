// Constant
const MAX_ATTEMPTS = 5;

// Function
function calculateSum(a, b) {
    return a + b;
}

// Class
class User {
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.userName}`);
    }
}

// Variable
let totalAmount = calculateSum(10, 20);
console.log(`Total Amount: ${totalAmount}`);

// Create instance of User class
const user = new User('Alice', 30);
user.greet();
