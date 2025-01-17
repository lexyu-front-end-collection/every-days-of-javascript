export interface BasicTypes {
    string: string;
    number: number;
    boolean: boolean;
    array: string[];
    tuple: [string, number];
    enum: "RED" | "GREEN" | "BLUE";
    any: any;
    void: void;
    null: null;
    undefined: undefined;
    never: never;
}

const basicTypesExample = {
    string: "Hello TypeScript",
    number: 42,
    boolean: true,
    array: ["a", "b", "c"],
    tuple: ["tuple", 1],
    enum: "red" as "RED" | "GREEN" | "BLUE",
    any: "anything goes here",
    void: undefined,
    null: null,
    undefined: undefined,
} as BasicTypes;


function demonstrateBasicTypes() {
    console.log("=== Basic Types Demo ===");
    
    Object.entries(basicTypesExample).forEach(([key, value]) => {
        console.log(`${key}:`, value);
    });

    function neverExample(): never {
        throw new Error("This function never returns");
    }

    console.log("\n=== Never Type Example ===");
    console.log("A function that returns never type can't complete normally");
    
    try {
        neverExample();
    } catch (e) {
        console.log("As expected, the never function threw an error");
    }
}

demonstrateBasicTypes();