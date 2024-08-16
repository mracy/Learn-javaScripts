function foo1(bar){
    bar = bar ?? 55;
    console.log(bar);
}
foo1();
foo1(22);

///

const foo2 = {
    bar2 : 0
}

const valueBar2 = foo2.bar2 ?? 42;
const valueBaz2 = foo2.baz2 ?? 42;

console.log("Value of bar", valueBar2);
console.log("Value of baz", valueBaz2);

///



