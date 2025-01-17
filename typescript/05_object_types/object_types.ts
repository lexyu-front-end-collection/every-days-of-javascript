// Property Modifiers 示例
interface Human {
    name: string;
    age: number;
}

// Optional Properties 示例
interface Configuration {
    color?: string;
    width?: number;
}

// readonly Properties 示例
interface Point {
    readonly x: number;
    readonly y: number;
}

// Index Signatures 示例
interface StringArray {
    [index: number]: string;
}

// Excess Property Checks 示例
interface SquareConfig {
    color?: string;
    width?: number;
}

const createSquare = (config: SquareConfig) => {
    return { color: config.color || "red", area: config.width ? config.width * config.width : 20 };
};

// Extending Types 示例
interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

// Intersection Types 示例
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

// Interface Extension vs. Intersection 示例
interface Animal {
    name: string;
}

interface Dog extends Animal {
    honey: boolean;
}

type AnimalWithHoney = Animal & { honey: boolean };

// Generic Object Types 示例
interface Box<Type> {
    contents: Type;
}

// The Array Type 示例
let numbers: Array<number> = [1, 2, 3];
let strings: string[] = ["hello", "world"];

// The ReadonlyArray Type 示例
let readOnlyNumbers: ReadonlyArray<number> = [1, 2, 3];
let readOnlyStrings: readonly string[] = ["hello", "world"];

// Tuple Types 示例
type StringNumberPair = [string, number];
let pair: StringNumberPair = ["hello", 42];

// readonly Tuple Types 示例
const point: readonly [number, number] = [3, 4];

// 使用示例
function demoAll() {
    // Property Modifiers
    const human: Human = { name: "John", age: 30 };
    console.log(human);

    // Optional Properties
    const config: Configuration = { color: "red" };
    console.log(config);

    // readonly Properties
    const point: Point = { x: 10, y: 20 };
    console.log(point);
    // point.x = 5; // Error: Cannot assign to 'x' because it is a read-only property

    // Index Signatures
    const arr: StringArray = ["hello", "world"];
    console.log(arr[0]);

    // Excess Property Checks
    const mySquare = createSquare({ width: 100, color: "blue" });
    console.log(mySquare);

    // Extending Types
    const dog: Dog = { name: "Brown Dog", honey: true };
    console.log(dog);

    // Intersection Types
    const colorfulCircle: ColorfulCircle = { color: "blue", radius: 10 };
    console.log(colorfulCircle);

    // Generic Object Types
    const box: Box<string> = { contents: "hello" };
    console.log(box);

    // Array Types
    console.log(numbers);
    console.log(strings);

    // ReadonlyArray
    console.log(readOnlyNumbers);
    console.log(readOnlyStrings);

    // Tuple Types
    console.log(pair);

    // readonly Tuple Types
    console.log(point);
}

demoAll();