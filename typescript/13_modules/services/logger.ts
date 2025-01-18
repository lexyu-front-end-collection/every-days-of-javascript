// 使用 class 和 interface
export interface LoggerInterface {
	log(message: string): void;
	error(message: string): void;
}

export class Logger implements LoggerInterface {
	log(message: string): void {
		console.log(`[LOG]: ${message}`);
	}

	error(message: string): void {
		console.error(`[ERROR]: ${message}`);
	}
}
