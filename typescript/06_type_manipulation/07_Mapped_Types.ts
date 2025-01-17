console.log("\n===== Mapped Types Demo =====");

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};

interface Todo {
    title: string;
    description: string;
}

const todo: MyReadonly<Todo> = {
    title: "Learn TypeScript",
    description: "Study mapped types"
};

console.log("MyReadonly todo:", todo);

// Create getters
type Getters<T> = {
    [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

interface Customer {
    name: string;
    age: number;
}

const customerWithGetters: Customer & Getters<Customer> = {
    name: "John",
    age: 30,
    getName: () => "John",
    getAge: () => 30
};

console.log("Name from getter:", customerWithGetters.getName());
console.log("Age from getter:", customerWithGetters.getAge());
