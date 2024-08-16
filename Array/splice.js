const months = ['Jan', 'Aug', 'Sep', 'Oct', 'Dec', 'Nov'];

months.splice(1, 0, 'feb');
months.splice(6, 0, 'Nov');

console.log(months);

months.splice(2, 0, 'May');
console.log(months);