const animals = [
    { name: "cat", size: "small", weight: 5 },
    { name: "dog", size: "small", weight: 10 },
    { name: "lion", size: "medium", weight: 150 },
    { name: "elephant", size: "big", weight: 5000 }
];
//Viết hàm để tạo 1 mảng mới chưa tên tất cả con vật
function getAnimalNames(animals: { name: string; size: string; weight: number; }[]):
    string[] {
    return animals.map(animal => animal.name);
}
//Viết hàm để tạo 1 mảng mới để lọc những con vật có cân nặng dưới 150
function filterAnimalsByWeight(animals: { name: string; size: string; weight: number; }[], maxWeight: number): { name: string; size: string; weight: number; }[] {
    return animals.filter(animal => animal.weight < maxWeight);
}
//Viết hàm để tính tổng cân nặng của tất cả con vật
function getTotalWeight(animals: { name: string; size: string; weight: number; }[]): number {
    return animals.reduce((total, animal) => total + animal.weight, 0);
}
//Viết hàm để tính tổng cân nặng của tất cả con vật có cân nặng dưới 150
function getTotalWeightUnder(animals: { name: string; size: string; weight: number; }[], maxWeight: number): number {
    return animals
        .filter(animal => animal.weight < maxWeight)
        .reduce((total, animal) => total + animal.weight, 0);
}

// Test các hàm
console.log(getAnimalNames(animals));
console.log(filterAnimalsByWeight(animals, 150));
console.log(getTotalWeight(animals));
console.log(getTotalWeightUnder(animals, 150)); 