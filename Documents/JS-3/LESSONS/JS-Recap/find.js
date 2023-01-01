// Find - find the first item(stop) that matches from an array.

let numbers = [3, 56, 2, 48, 5];

const newNumber = numbers.find(function (num) {
    return num >10;
})

console.log(newNumber);
