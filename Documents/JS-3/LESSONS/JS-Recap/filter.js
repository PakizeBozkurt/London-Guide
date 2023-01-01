//Filter - Create a new array by keeping the items that return true!

let numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.filter(function(num) {
    return num > 10
});

console.log(newNumbers);

// forEach!

// let newNumbers = [];
// numbers.forEach(function(num) {
//     if(num < 10) {
//         newNumbers.push(num)
//     }
// })

// console.log(newNumbers);