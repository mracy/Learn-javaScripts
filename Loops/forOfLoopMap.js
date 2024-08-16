const map = new Map();

map.set('name', 'Abhishek');
map.set('age', '43');

for (let [key, value] of map){
    console.log(key + ' - ' + value);
}