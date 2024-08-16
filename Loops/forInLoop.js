const student = {
    name: "Monica",
    grade: 8
}

for (let key in student){
    console.log(`${key} => ${student[key]}`);
}