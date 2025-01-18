import { add, subtract } from '@modules/math.ts';
import { multiply, divide, pow } from '@modules/advanced-math.ts';
import * as MathUtils from "@modules/math-utils.ts";
import { basicMath } from '@modules/math-utils.ts';
import type { PointT, Circle, Shape } from '@/services/shapes.ts';
import { ShapeType } from '@/services/shapes.ts';
import { Logger } from '@/services/logger.ts';
import Formatter, { formatDate, formatNumber } from '@/services/formatter.ts';
import { Validation } from '@/namespaces/validation.ts';

function runDemo() {
	console.log("=== TypeScript Modules Demo ===\n");

	// 基本數學運算
	console.log("Basic Math Operations:");
	console.log(`Add: ${add(5, 3)}`);
	console.log(`Subtract: ${subtract(10, 4)}`);

	// 進階數學運算
	console.log("\nAdvanced Math Operations:");
	console.log(`Multiply: ${multiply(4, 3)}`);
	console.log(`Divide: ${divide(10, 2)}`);
	console.log(`Power: ${pow(2, 3)}`);

	// 使用重新導出的功能
	console.log("\nMath Utils:");
	console.log(`MathUtils add: ${MathUtils.add(3, 4)}`);
	console.log(`BasicMath add: ${basicMath.add(5, 5)}`);

	// 使用型別
	const point: PointT = { x: 10, y: 20 };
	const circle: Circle = { center: point, radius: 5 };
	const shape: Shape = circle;

	console.log("\nShapes:");
	console.log(`Point: ${JSON.stringify(point)}`);
	console.log(`Circle: ${JSON.stringify(circle)}`);
	console.log(`Shape Type: ${ShapeType.Circle}`);

	// 使用 Logger
	console.log("\nLogger Service:");
	const logger = new Logger();
	logger.log("This is a test message");
	logger.error("This is an error message");

	// 使用 Formatter
	console.log("\nFormatter Service:");
	console.log(`Formatted Date: ${formatDate(new Date())}`);
	console.log(`Formatted Number: ${formatNumber(123.456)}`);
	console.log(`Formatted Currency: ${Formatter.formatCurrency(99.99)}`);

	// 使用命名空間
	console.log("\nValidation Namespace:");
	const letterValidator = new Validation.LettersOnlyValidator();
	const numberValidator = new Validation.NumberValidator();

	console.log(`Is "Hello" valid letters? ${letterValidator.isValid("Hello")}`);
	console.log(`Is "123" valid numbers? ${numberValidator.isValid("123")}`);
}

// 執行展示
runDemo();