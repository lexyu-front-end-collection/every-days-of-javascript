// Primitive Types
const str: string = "Hello TypeScript";
const num: number = 42;
const bool: boolean = true;

console.log("\n=== Primitive Types ===");
console.log({ str, num, bool });

// Arrays
const numbers: number[] = [1, 2, 3];
const strings: Array<string> = ["a", "b", "c"];

console.log("\n=== Arrays ===");
console.log({ numbers, strings });

// Tuple
const tuple: [string, number] = ["age", 25];

console.log("\n=== Tuple ===");
console.log({ tuple });

// Any & Unknown
let anyVar: any = 4;
anyVar = "now I'm a string";
let unknownVar: unknown = "hello";

console.log("\n=== Any & Unknown ===");
console.log({ anyVar, unknownVar });

// Object Types
interface Person {
    name: string;
    age: number;
    email?: string; // Optional property
}

const person: Person = {
    name: "John",
    age: 30,
};

console.log("\n=== Object Types ===");
console.log({ person });

// Union Types
type StringOrNumber = string | number;
const unionVar: StringOrNumber = Math.random() > 0.5 ? "string" : 42;

console.log("\n=== Union Types ===");
console.log({ unionVar });

// Type Aliases
type Point = {
    x: number;
    y: number;
};

const point: Point = { x: 10, y: 20 };

console.log("\n=== Type Aliases ===");
console.log({ point });

// Literal Types
type Direction = "north" | "south" | "east" | "west";
const direction: Direction = "north";

console.log("\n=== Literal Types ===");
console.log({ direction });

// Enum
enum Color {
    Red,
    Green,
    Blue,
}

const color: Color = Color.Red;

console.log("\n=== Enum ===");
console.log({ color, colorName: Color[color] });

// Functions
function add(x: number, y: number): number {
    return x + y;
}

const subtract = (x: number, y: number): number => x - y;

console.log("\n=== Functions ===");
console.log({
    addition: add(5, 3),
    subtraction: subtract(10, 4),
});

// Null and Undefined
let nullableString: string | null = null;
let undefinedOrNumber: number | undefined = undefined;

console.log("\n=== Null and Undefined ===");
console.log({ nullableString, undefinedOrNumber });

// Type Assertions
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

console.log("\n=== Type Assertions ===");
console.log({ strLength });

// Intersection Types
type Employee = {
    id: number;
    role: string;
};

type ContactInfo = {
    email: string;
    phone: string;
};

type EmployeeWithContact = Employee & ContactInfo;

const employee: EmployeeWithContact = {
    id: 1,
    role: "developer",
    email: "dev@example.com",
    phone: "123-456-7890",
};

console.log("\n=== Intersection Types ===");
console.log({ employee });