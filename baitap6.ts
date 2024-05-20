// khai bao ham
function sumSalaries(salaries: { [key: string]: number }):
    number {
    //khởi tạo biến 
    let totalSalary = 0;
    for (let key in salaries) {
        if (salaries.hasOwnProperty(key)) {
            totalSalary += salaries[key];
        }
    }
    return totalSalary;
}

// Đối tượng salaries
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// Test hàm sumSalaries
console.log(sumSalaries(salaries));