const salaries = {
    Monica: 3000,
    Madhu: 4000,
    Alex: 5000
};

for (let i in salaries){
    let salary = "$" + salaries[i];
    console.log(`${i}: ${salary}`)
}