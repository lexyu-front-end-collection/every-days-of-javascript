const p2 = { x: 10, y: 20 };
type PointType = typeof p2;

function printPoint(p: PointType) {
    console.log(`Point coordinates - x: ${p.x}, y: ${p.y}`);
}

printPoint(p2);
printPoint({ x: 30, y: 40 });

const colors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
} as const;

type Colors = typeof colors;
const printColor = (color: keyof Colors) => {
    console.log(`Color ${color} has value:`, colors[color]);
};

printColor("red");
printColor("blue");
