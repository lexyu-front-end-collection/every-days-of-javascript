console.log("\n===== Template Literal Types Demo =====");

type EventName<T extends string> = `${T}Changed`;
type UserEvents = EventName<"name" | "age" | "location">;

function handleEvent(event: UserEvents, handler: () => void) {
    console.log(`Handling event: ${event}`);
    handler();
}

handleEvent("nameChanged", () => console.log("Name was changed"));
handleEvent("ageChanged", () => console.log("Age was changed"));

// String manipulation types
type Greeting = "Hello, world";
type ShoutyGreeting = Uppercase<Greeting>;
type QuietGreeting = Lowercase<Greeting>;
type HelloGreeting = Capitalize<Greeting>;
type NoCapGreeting = Uncapitalize<Greeting>;

console.log("Original:", "Hello, world");
console.log("Uppercase:", "HELLO, WORLD" as ShoutyGreeting);
console.log("Lowercase:", "hello, world" as QuietGreeting);
console.log("Capitalized:", "Hello, world" as HelloGreeting);
console.log("Uncapitalized:", "hello, world" as NoCapGreeting);