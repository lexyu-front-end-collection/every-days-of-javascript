console.log("\n===== Keyof Type Operator Demo =====");

interface Person {
    name: string;
    age: number;
    location: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    const result = obj[key];
    console.log(`Getting ${String(key)}:`, result);
    return result;
}

const person: Person = {
    name: "John",
    age: 30,
    location: "New York"
};

getProperty(person, "name");
getProperty(person, "age");
getProperty(person, "location");