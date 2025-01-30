// 1. Sum all numbers in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum); // 15

// 2. Calculate average
const average = numbers.reduce((acc, curr, idx, arr) => {
	if (idx === arr.length - 1) {
		return (acc + curr) / arr.length;
	}
	return acc + curr;
}, 0);
console.log('Average:', average); // 3

// 3. Group objects by property
interface Person {
	name: string;
	age: number;
}

const people: Person[] = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 30 },
	{ name: 'Charlie', age: 25 }
];

const groupedByAge = people.reduce<Record<number, Person[]>>((acc, curr) => {
	acc[curr.age] = acc[curr.age] || [];
	acc[curr.age].push(curr);
	return acc;
}, {});
console.log('Grouped by age:', groupedByAge);

// 4. Convert array to object
const keyValuePairs = [
	['name', 'Alice'],
	['age', '25'],
	['city', 'New York']
];

const objectFromArray = keyValuePairs.reduce<Record<string, string>>((acc, [key, value]) => {
	acc[key] = value;
	return acc;
}, {});
console.log('Object from array:', objectFromArray);

// 5. Flatten nested array
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArray.reduce<number[]>((acc, curr) => [...acc, ...curr], []);
console.log('Flattened array:', flattened);