// Task 1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray(arr: number[]) :number{
    let sum = 0;
    for(let n of arr){
        sum += n;
    }
    return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5]));