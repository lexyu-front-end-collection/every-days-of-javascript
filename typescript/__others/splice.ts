// Array<string | number>
let arr: (string | number)[] = [1, 2, 3, 4, 5]
let removed = arr.splice(2, 2);
console.log(arr);
console.log(removed);

arr = [1, 2, 5];
arr.splice(2, 0, 3, 4);
console.log(arr);

arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b');
console.log(arr)

arr = [1, 2, 3, 4, 5];
arr.splice(-2, 1);
console.log(arr);

arr = [1, 2, 3, 4, 5];
arr.splice(0, arr.length);
console.log(arr);

// Compared ---------------------------------->

arr = [1, 2, 3, 4, 5];
let spliced = arr.splice(1, 2);
console.log(arr);
console.log(spliced);

arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 3);
console.log(arr);
console.log(sliced);
