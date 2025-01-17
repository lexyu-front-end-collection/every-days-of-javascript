// --------- Function Type Expressions ---------
const greeter: (name: string) => string = function (name) {
    return `Hello ${name}`;
}
console.log("Function Type Expression Demo:");
console.log(greeter("TypeScript"));

type StringProcessor = (input: string) => string;
const toUpperCase: StringProcessor = (str) => str.toUpperCase();
console.log(toUpperCase("hello"));
console.log("-".repeat(50));

// --------- Call & Construct Signatures ---------
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log("Call Signature Demo:");
    console.log(fn.description + " returned " + fn(6));
}

// Implementation
const testFn: DescribableFunction = (n: number) => n > 5;
testFn.description = "Test function";
doSomething(testFn);
console.log("-".repeat(50));

// --------- Generic Functions ---------
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

function map<T, U>(arr: T[], func: (arg: T) => U): U[] {
    return arr.map(func);
}

console.log("Generic Functions Demo:");
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
console.log(map([1, 2, 3], (n) => n.toString()));
console.log("-".repeat(50));

// --------- Optional & Rest Parameters ---------
function buildName(firstName: string, lastName?: string) {
    return lastName ? `${firstName} ${lastName}` : firstName;
}

function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log("Optional & Rest Parameters Demo:");
console.log(buildName("Bob"));
console.log(buildName("Bob", "Smith"));
console.log(`Sum: ${sum(1, 2, 3, 4)}`);
console.log("-".repeat(50));

// --------- Function Overloads ---------
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
    if (month !== undefined && day !== undefined) {
        return new Date(yearOrTimestamp, month - 1, day);
    }
    return new Date(yearOrTimestamp);
}

console.log("Function Overloads Demo:");
console.log(makeDate(2023));
console.log(makeDate(2023, 12, 25));
console.log("-".repeat(50));

// --------- Special Return Types ---------
function logMessage(message: string): void {
    console.log(message);
}

function throwError(message: string): never {
    throw new Error(message);
}

function safeParse(s: string): unknown {
    return JSON.parse(s);
}

function processValue(value: unknown) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}

console.log("Special Return Types Demo:");
logMessage("Testing void return type");
try {
    const parsed = safeParse('{"name": "test"}');
    console.log(parsed);
    processValue("hello unknown");
} catch (e) {
    console.log("Error caught");
}
console.log("-".repeat(50));

// --------- Parameter Destructuring ---------
function printCoord({ x, y }: { x: number; y: number }) {
    console.log(`Coordinate: (${x}, ${y})`);
}

function printPerson({ name, age = 30 }: { name: string; age?: number }) {
    console.log(`${name} is ${age} years old`);
}

console.log("Parameter Destructuring Demo:");
printCoord({ x: 100, y: 200 });
printPerson({ name: "Alice" });
console.log("-".repeat(50));

// --------- this in Functions ---------
interface DB {
    filterUsers(filter: (this: User, user: User) => boolean): User[];
}

interface User {
    admin: boolean;
}

const db: DB = {
    filterUsers: (filter: (this: User, user: User) => boolean) => {
        const users: User[] = [{ admin: true }, { admin: false }];
        return users.filter(filter);
    }
};

console.log("This in Functions Demo:");
const admins = db.filterUsers(function (this: User, user: User) {
    return user.admin;
});
console.log(admins);