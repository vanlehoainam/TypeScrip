// khai báo hàm 
function sumToN(n: number): number {
    let sum = 0; // khởi tạo hàm sum = 0 
    // khời tạo vòng lặp mỗi lần lặp thì i đc cộng vào m 
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Test hàm sumToN
console.log(sumToN(5));