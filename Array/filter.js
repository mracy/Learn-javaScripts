const words = ["google", "panda", "palav", "pulsar", "pankag", "swimming", "shark", "shanta"];
const result = words.filter((words) => words.length > 5);

console.log(result);

//////

function isBigValue(value){
    return value >= 10;
}

const filtered = [1, 23, 5, 65, 2, 8, 64, 13, 7, 9].filter(isBigValue);
console.log(filtered);


