// 1. Array Spread Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
console.log('Array Spread:', moreNumbers);

// Combining arrays
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = [...array1, ...array2]; // [1, 2, 3, 4]
console.log('Combined Arrays:', combinedArray);

// 2. Object Spread Operator
const person = {
	name: 'John',
	age: 30
};

const employeeInfo = {
	...person,
	role: 'Developer',
	company: 'Tech Corp'
};
console.log('Object Spread:', employeeInfo);

// Merging objects
const defaults = { theme: 'light', language: 'en' };
const userPreferences = { theme: 'dark' };
const settings = { ...defaults, ...userPreferences };
console.log('Merged Objects:', settings); // userPreferences overwrites defaults

// 3. Rest Parameters
function sum(...numbers: number[]): number {
	return numbers.reduce((total, num) => total + num, 0);
}
console.log('Rest Parameters in Function:', sum(1, 2, 3, 4, 5)); // 15

// Rest with destructuring arrays
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log('Array Destructuring with Rest:', { first, second, remaining });

// Rest with destructuring objects
const fullPerson = {
	name: 'Jane',
	age: 25,
	city: 'New York',
	country: 'USA',
	occupation: 'Engineer'
};

const { name, age, ...address } = fullPerson;
console.log('Object Destructuring with Rest:', { name, age, address });

// 4. Advanced Usage Examples
// Conditional spreading
const condition = true;
const conditionalObject = {
	...person,
	...(condition ? { extraField: 'value' } : {})
};
console.log('Conditional Spread:', conditionalObject);

// Deep clone using spread (shallow copy)
const original = { nested: { value: 42 } };
const clone = { ...original };
console.log('Shallow Clone:', clone);

// Function that accepts rest parameters and spreads them
function multiply(multiplier: number, ...numbers: number[]): number[] {
	return numbers.map(n => n * multiplier);
}
const numbers2Multiply = [1, 2, 3];
console.log('Rest and Spread in Function:', multiply(2, ...numbers2Multiply));

// TypeScript specific: Spread with interfaces
interface BaseConfig {
	api: string;
	timeout: number;
}

interface ExtendedConfig extends BaseConfig {
	features: string[];
}

const baseConfig: BaseConfig = {
	api: 'https://api.example.com',
	timeout: 5000
};

const fullConfig: ExtendedConfig = {
	...baseConfig,
	features: ['feature1', 'feature2']
};
console.log('Interface Spread:', fullConfig);