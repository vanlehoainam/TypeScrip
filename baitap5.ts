function sumArray(arrayA: number[]):
    number {
    let sum = 0;
    for (let num of arrayA) {
        sum += num;
    }
    return sum;
}

// Test hàm sumArray
console.log(sumArray([5, 2, 6, 3, 8]));