// 型別定義和介面
export interface PointT {
	x: number;
	y: number;
}

export interface Circle {
	center: PointT;
	radius: number;
}

// 使用 type
export type Shape = Circle | PointT;

// 使用 const enum
export const enum ShapeType {
	Point = 'point',
	Circle = 'circle'
}