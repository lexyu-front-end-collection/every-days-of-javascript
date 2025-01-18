// Basic interfaces for demonstration
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

class HiClass {
    constructor(public name: string, private age: number) {}
    greet() {
        return `Hello, ${this.name}`;
    }
}

// Helper function to print type information
function printType<T>(label: string, value: T) {
    console.log(`\n=== ${label} ===`);
    console.log(value);
}

// Awaited
async function demoAwaited() {
    const promise = Promise.resolve(42);
    type AwaitedType = Awaited<typeof promise>;
    const result: AwaitedType = await promise;
    printType('Awaited', result);
}

// Partial
const partialUser: Partial<User> = {
    name: 'John'
};
printType('Partial', partialUser);

// Required
const requiredUser: Required<User> = {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    age: 30
};
printType('Required', requiredUser);

// Readonly
const readonlyUser: Readonly<User> = {
    id: 1,
    name: 'John',
    email: 'john@example.com'
};
// readonlyUser.email = "aaaaa" // error
printType('Readonly', readonlyUser);

// Record
const userRoles: Record<string, string> = {
    admin: 'Administrator',
    user: 'Regular User'
};
printType('Record', userRoles);

// Pick
type UserBasicInfo = Pick<User, 'name' | 'email'>;
const basicInfo: UserBasicInfo = {
    name: 'John',
    email: 'john@example.com',
	// age: 11 // error
};
printType('Pick', basicInfo);

// Omit
type UserWithoutId = Omit<User, 'id'>;
const userNoId: UserWithoutId = {
	// id: 11, // error
    name: 'John',
    email: 'john@example.com'
};
printType('Omit', userNoId);

// Exclude
type Numbers = 1 | 2 | 3 | 4 | 5;
type EvenNumbers = Exclude<Numbers, 1 | 3 | 5>;
const evenNum: EvenNumbers = 2;
printType('Exclude', evenNum);

// Extract
type ExtractedNumbers = Extract<Numbers, 2 | 4 | 6>;
const extractedNum: ExtractedNumbers = 2;
printType('Extract', extractedNum);

// NonNullable
type MaybeNull = string | null | undefined;
type DefinitelyString = NonNullable<MaybeNull>;
const nonNullString: DefinitelyString = 'Hello';
// const testNonNullString: DefinitelyString = null;
printType('NonNullable', nonNullString);

// Parameters
type GreetFunction = (name: string, age: number) => string;
type GreetParams = Parameters<GreetFunction>;
const params: GreetParams = ['Tester', 30];
printType('Parameters', params);

// ConstructorParameters
type ClassParams = ConstructorParameters<typeof HiClass>;
const classParams: ClassParams = ['John', 30];
printType('ConstructorParameters', classParams);

// ReturnType
type GreetReturnType = ReturnType<GreetFunction>;
const greeting: GreetReturnType = 'Hello, John';
printType('ReturnType', greeting);

// InstanceType
type ExampleInstance = InstanceType<typeof HiClass>;
const instance: ExampleInstance = new HiClass('John', 30);
printType('InstanceType', instance);

// String Manipulation Types
type UppercaseExample = Uppercase<'hello'>;
const uppercaseStr: UppercaseExample = 'HELLO';
printType('Uppercase', uppercaseStr);

type LowercaseExample = Lowercase<'HELLO'>;
const lowercaseStr: LowercaseExample = 'hello';
printType('Lowercase', lowercaseStr);

type CapitalizeExample = Capitalize<'hello'>;
const capitalizedStr: CapitalizeExample = 'Hello';
printType('Capitalize', capitalizedStr);

type UncapitalizeExample = Uncapitalize<'Hello'>;
const uncapitalizedStr: UncapitalizeExample = 'hello';
printType('Uncapitalize', uncapitalizedStr);

// Run async demo
demoAwaited();