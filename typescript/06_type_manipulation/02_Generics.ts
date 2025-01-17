console.log("===== Generics Demo =====");

function identity<T>(arg: T): T {
    return arg;
}

class GenericBox<T> {
    private content: T;
    constructor(value: T) {
        this.content = value;
    }
    getValue(): T {
        return this.content;
    }
}

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(`Length: ${arg.length}`);
    return arg;
}

// Generics Usage
const numberResult = identity(42);
console.log("Generic identity with number:", numberResult);

const stringBox = new GenericBox("Hello World");
console.log("Generic box with string:", stringBox.getValue());

const arrayLength = loggingIdentity(["a", "b", "c"]);
console.log("Array after length check:", arrayLength);