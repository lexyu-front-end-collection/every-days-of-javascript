export namespace Validation {
	export interface StringValidator {
		isValid(s: string): boolean;
	}

	export class LettersOnlyValidator implements StringValidator {
		isValid(s: string): boolean {
			return /^[A-Za-z]+$/.test(s);
		}
	}

	export class NumberValidator implements StringValidator {
		isValid(s: string): boolean {
			return /^[0-9]+$/.test(s);
		}
	}
}