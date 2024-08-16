const x = NaN;
const y = 0 / 0;

console.log(Object.is(x, y));
console.log(x === y);