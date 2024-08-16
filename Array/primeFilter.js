const array = [-2, 3, 4, -5, -6, 4, 5, 7, 2, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function isPrime(num){
    for (let i = 2; i < num - 1; i++){
        if(num % i === 0){
            return false;
        }
        return num > 1;
    }
}
console.log(array.filter(isPrime));