// 1. Numeric enums
enum Direction {
    Up = 1,
    Down,      // 2
    Left,      // 3
    Right      // 4
}

// 2. String enums
enum TextAlignment {
    Left = "LEFT",
    Center = "CENTER",
    Right = "RIGHT"
}

// 3. Heterogeneous enums (混合枚举)
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

// 4. Computed and constant members
enum FileAccess {
    None = 0,
    Read = 1 << 1,      // 2
    Write = 1 << 2,     // 4
    ReadWrite = Read | Write,  // 6
    // Computed member
    G = "123".length
}

// 5. Union enums and enum member types
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

// 6. Enums at runtime
enum E {
    X, Y, Z
}

// 7. const enums
const enum Directions {
    Up,
    Down,
    Left,
    Right,
}

// 8. Ambient enums
declare enum Env {
    Debug,
    Production,
    Testing
}

// 9. Object-like enum alternative
const enum EDirection {
    Up,
    Down,
    Left,
    Right,
}

const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

// Main demo function
function demoEnums() {
    // Numeric enums demo
    console.log("\n1. Numeric Enums:");
    console.log(`Direction.Up = ${Direction.Up}`);
    console.log(`Direction.Down = ${Direction.Down}`);
    console.log(`Direction[2] = ${Direction[2]}`); // Reverse mapping

    // String enums demo
    console.log("\n2. String Enums:");
    console.log(`TextAlignment.Left = ${TextAlignment.Left}`);
    console.log(`TextAlignment.Center = ${TextAlignment.Center}`);

    // Heterogeneous enums demo
    console.log("\n3. Heterogeneous Enums:");
    console.log(`BooleanLikeHeterogeneousEnum.No = ${BooleanLikeHeterogeneousEnum.No}`);
    console.log(`BooleanLikeHeterogeneousEnum.Yes = ${BooleanLikeHeterogeneousEnum.Yes}`);

    // Computed members demo
    console.log("\n4. Computed Members:");
    console.log(`FileAccess.ReadWrite = ${FileAccess.ReadWrite}`);
    console.log(`FileAccess.G = ${FileAccess.G}`);

    // Union enums demo
    console.log("\n5. Union Enums:");
    const circle: Circle = {
        kind: ShapeKind.Circle,
        radius: 100,
    };
    console.log(`Circle kind = ${circle.kind}`);


    // Enums at runtime demo
    console.log("\n6. Enums at Runtime:");
    function f(obj: { X: number }) {
        return obj.X;
    }
    console.log(`E.X = ${f(E)}`);
	console.log("E.X =", E.X);           
    console.log("E[1] =", E[1]);         
    console.log("E['Z'] =", E["Z"]);     

    // Const enums demo
    console.log("\n7. Const Enums:");
    console.log(`Directions.Up = ${Directions.Up}`);
    console.log(`Directions.Down = ${Directions.Down}`);
	console.log(`Directions.Left = ${Directions.Left}`);
	console.log(`Directions.Right = ${Directions.Right}`);

    // Objects vs Enums demo
    console.log("\n8. Objects vs Enums:");
    console.log(`EDirection.Up = ${EDirection.Up}`);
    console.log(`ODirection.Up = ${ODirection.Up}`);
    
    // Demonstrate reverse mapping
    console.log("\n9. Reverse Mappings:");
    console.log(`Direction[Direction.Up] = ${Direction[Direction.Up]}`);
    console.log(`Original: Direction.Down = ${Direction.Down}`);
    console.log(`Reverse: Direction[2] = ${Direction[2]}`);
}

// Run the demo
demoEnums();