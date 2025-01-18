// 重新導出 (re-export) 其他模組的功能
export { add, subtract } from './math.ts';
export { multiply, divide, pow } from './advanced-math.ts';
// 重新導出並重命名
export { multiply as mul } from './advanced-math.ts';
// 導出所有
export * from './math.ts';
// 導出所有並加上命名空間
export * as basicMath from './math.ts';