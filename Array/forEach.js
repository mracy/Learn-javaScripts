function basket(fruit, index, array) {
    console.log(`Fruit at index ${index}: ${fruit}`);
}

function fruitsBasket() {
    const fruits = ['grape', 'guava', 'apple', 'orange'];
    fruits.forEach(basket); // Pass the basket function as a callback to forEach
}

fruitsBasket(); // Call the function to execute the code


function clothBasket(cloth, index, array){
    console.log(`Clothes at index ${index}: ${cloth}`);
}

function cloothesBasket(){
    const pants = ['Zara', 'SkyJeans', 'Petrol', 'Police'];
    pants.forEach(clothBasket);
}
cloothesBasket();