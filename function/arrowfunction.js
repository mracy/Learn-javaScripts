const addition = (x, y) => x + y;

let answer = addition(6, 2);
console.log(answer);


////


const factorial = (n) =>{
    if (n === 0){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}
const result = factorial(5);
console.log(result);

////

const human = {
    name : 'Sanata',
    age : 37,
    sayName:() => {
        console.log(this.name);
    }
};

human.sayName();

/////

const Person = (name, age) => {
    this.name = name;
    this.age = age;
}
const bhandari = new Person('Bharat', 27);
console.log(bhandari.name);
console.log(bhandari.age);