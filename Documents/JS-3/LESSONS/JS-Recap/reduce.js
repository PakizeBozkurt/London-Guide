//Reduce - Accumutate  a value by doing something to each item in an array.

let numbers = [3, 56, 2, 48, 5];

let newNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
})

// Or

// let newNumber = 0;
// numbers.forEach(function (currentNumber) {
//     newNumber += currentNumber
// })

console.log(newNumber);
