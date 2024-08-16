const value = "Hi.";
const result = value && "Truthy";

console.log(result);

///



if ('Hello'){
    console.log('Truthy');
}

if ('64'){
    console.log('Truthy');
}

if (["apple", "grapes"]){
    console.log("Truthy");
}

if (function() {}){
    console.log("Truthy");
}

if (0){
    console.log("Falsy");
}

if (null){
    console.log("Falsy");
}

if (''){
    console.log("Falsy");
}

if (undefined){
    console.log("Falsy");
}

if (NaN){
    console.log("Falsy");
}

///

const name1 = '';
const displayName1 = name1 || "Guest";

console.log(displayName1);


////

const name2 = "Jesus";
const displayName2 = name2 || "Guest";

console.log(displayName2);

/////


const options = {};
const limit = options.limit || 10;

console.log(limit)

/////


const user = {address: {city: "New York"}};
const city = user.address && user.address.city;
console.log(city);