// 1. typeof type guards
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(`String: ${value.toUpperCase()}`);
    } else {
        console.log(`Number: ${value.toFixed(2)}`);
    }
}

console.log("\n=== typeof type guards ===");
printValue("hello");
printValue(42.123);

// 2. Truthiness narrowing
function printLength(value: string | null | undefined) {
    if (value) {
        console.log(`Length: ${value.length}`);
    } else {
        console.log("No value");
    }
}

console.log("\n=== Truthiness narrowing ===");
printLength("test");
printLength(null);
printLength(undefined);

// 3. Equality narrowing
function checkValue(x: string | number, y: string | boolean) {
    if (x === y) {
        // x and y must be string here
        console.log(`Both are strings: ${x.toUpperCase()}`);
    } else {
        console.log("Values are different");
    }
}

console.log("\n=== Equality narrowing ===");
checkValue("hello", "hello");
checkValue("hello", true);

// 4. in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        console.log("Fish is swimming");
    } else {
        console.log("Bird is flying");
    }
}

console.log("\n=== in operator narrowing ===");
move({ swim: () => {} });
move({ fly: () => {} });

// 5. instanceof narrowing
class Car {
    drive() {
        return "Driving a car";
    }
}

class Bicycle {
    ride() {
        return "Riding a bicycle";
    }
}

function useVehicle(vehicle: Car | Bicycle) {
    if (vehicle instanceof Car) {
        console.log(vehicle.drive());
    } else {
        console.log(vehicle.ride());
    }
}

console.log("\n=== instanceof narrowing ===");
useVehicle(new Car());
useVehicle(new Bicycle());

// 6. Type predicates
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function feedPet(pet: Fish | Bird) {
    if (isFish(pet)) {
        console.log("Feed fish food");
    } else {
        console.log("Feed bird food");
    }
}

console.log("\n=== Type predicates ===");
feedPet({ swim: () => {} });
feedPet({ fly: () => {} });

// 7. Discriminated unions
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}

console.log("\n=== Discriminated unions ===");
console.log(getArea({ kind: "circle", radius: 5 }));
console.log(getArea({ kind: "square", sideLength: 5 }));

// 8. Assertion functions
function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
        throw new Error("Not a string!");
    }
}

function processString(value: unknown) {
    assertIsString(value);
    console.log(value.toUpperCase()); // value is now known to be string
}

console.log("\n=== Assertion functions ===");
try {
    processString("hello");
    processString(42); // This will throw an error
} catch (error) {
    console.log("Error caught:", error.message);
}

// 9. Never type and Exhaustiveness checking
type Direction = "north" | "south" | "east" | "west";

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

function getDirectionCode(direction: Direction): number {
    switch (direction) {
        case "north":
            return 0;
        case "south":
            return 1;
        case "east":
            return 2;
        case "west":
            return 3;
        default:
            return assertNever(direction); // Will error if we forget to handle a case
    }
}

console.log("\n=== Never type and Exhaustiveness checking ===");
console.log(getDirectionCode("north"));
console.log(getDirectionCode("south"));