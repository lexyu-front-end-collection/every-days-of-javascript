console.log("\n===== Conditional Types Demo =====");

type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

function printTypeName<T>(value: T) {
    const typeName: TypeName<T> = undefined as any;
    console.log(`Value ${value} is type:`, typeName);
}

printTypeName("hello");
printTypeName(42);
printTypeName(true);
printTypeName(() => {});
printTypeName({});
