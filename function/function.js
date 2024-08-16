function multiplication(p1, p2){
    return p1 * p2;
}

const result1 = multiplication(5, 7);
console.log(result1);


////

function addition(c1, c2){
    return c1 + c2;
}

const answer = addition(8, 4);
console.log(answer);

///


function factorial(n){
    if (n === 0){
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}

const result2 = factorial(5)
console.log(result2);

///

const human = {
    name : 'Santa',
    age : 37,
    sayName:function(){
        console.log(this.name);
    }
};

human.sayName();

////

function Human(name, age){
    this.name = name;
    this.age = age;
}

const ajaya = new Human('Ajaya', 28);
console.log(ajaya.name);