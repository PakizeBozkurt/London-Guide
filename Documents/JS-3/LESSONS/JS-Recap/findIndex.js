//FindIndex - find the index of the first item that matches.

let numbers = [3, 56, 2, 48, 5];

const newNumber = numbers.findIndex(function (num) {
    return num >10;
})

console.log(newNumber);
