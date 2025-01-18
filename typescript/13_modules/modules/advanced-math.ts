// 命名導出物件
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;
const power = (base: number, exponent: number) => Math.pow(base, exponent);


export { multiply, divide };
export { power as pow };