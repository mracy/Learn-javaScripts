function callBackFunction(){
    console.log("I'm a callback function");
}

function highOrderFunction(func){
    console.log("I'm a high order function");
    func();
}

highOrderFunction(callBackFunction);


//////


const radius1 = [1, 2, 3];

const calculateArea = function(radius1){
    const output1  = [];

    for(let i = 0; i < radius1.length; i++){
        output1.push(Math.PI * radius1[i] * radius1[i]);
    }
    return output1;
}

const calculateDiameter = function(radius1){
    const output1 = [];

    for(let i = 0; i < radius1.length; i++){
        output1.push(2 * radius1[i]);
    }
    return output1;
}

console.log(calculateArea(radius1));
console.log(calculateDiameter(radius1));

//////

const radius2 = [1, 2, 3];

const area = function(radius2){
    return Math.PI * radius2 * radius2;
}

const diameter = function(radius2){
    return 2 * radius2;
}

const circumeference = function(radius2){
    return 2 * Math.PI * radius2;
}

const calculate = function(radius2, logic){
    const output2 = [];

    for (let i = 0; i < radius2.length; i++){
        output2.push(logic(radius2[i]));
    }
    return output2;
}

console.log(calculate(radius2, area));
console.log(calculate(radius2, diameter));
console.log(calculate(radius2, circumeference));


///////


const arr1 = [1, 3, 4, 5, ];
const output3 = arr1.map((num) => num += 10);

console.log(arr1);
console.log(output3);

////

const user = [
    {firstName: "Alex", lastName: "Samp", age: 24},
    {firstName: "Bane", lastName: "Wamp", age: 25},
    {firstName: "Sane", lastName: "Nang", age: 22},
    {firstName: "Bale", lastName: "Kamp", age: 23},
    {firstName: "Kots", lastName: "Wamp", age: 26}
]

const result3 = user.map((user) => user.firstName + " " + user.lastName);
console.log(result3);


/////


const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result4 = arr2.filter((num) => num % 2);

console.log(arr2);
console.log(result4);

//////


const users = [
    {firstName: "Jawa", lastName: "Khali", age: 35},
    {firstName: "Lalit", lastName: "Puri", age: 38},
    {firstName: "Goro", lastName: "kholi", age: 32},
    {firstName: "Koop", lastName: "Dool", age: 33},
    {firstName: "Pool", lastName: "Champ", age: 49},
]

const output4 = users.filter(({age}) => age > 35);
console.log(output4);


/////


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0);

console.log(sum);


////


const numb = [122, 3344, 566, 7788, 2444, 663, 4466, 5666];

const maxValue = numb.reduce((max, curr) => {
    if (curr > max) max = curr;
    return max;
}) 

console.log(maxValue);

////
const obj1 = {a : 1, b : 2};
const obj2 = {c : 3, d : 4};
const obj3 = {e : 5, f : 6};
const obj4 = {g : 7, h : 8};

const mergedObj = [obj1, obj2, obj3, obj4].reduce ((acc,  curr) => {
    return {...acc, ...curr};
}, {});

console.log(mergedObj);

/////



const shoppingCart = [
    {name: "apple", quantity: 9, price: 30},
    {name: "apple", quantity: 10, price: 35},
    {name: "mobile", quantity: 20, price: 76},
    {name: "mobile", quantity: 70, price: 13},
    {name: "shoe", quantity: 60, price: 56},
    {name: "shoe", quantity: 5, price: 53},
    {name: "notebook", quantity: 4, price: 87},
    {name: "notebook", quantity: 3, price: 14}
]

const products = shoppingCart.reduce((productGroup, product) => {
    const name = product.name;
    if(productGroup[name] == null){
        productGroup[name] = [];   
    }
    productGroup[name].push(product);
    return productGroup;
}, {});

console.log(products);