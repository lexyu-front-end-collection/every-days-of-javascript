// 預設導出和具名導出混用
export const formatDate = (date: Date): string => date.toISOString();
export const formatNumber = (num: number): string => num.toFixed(2);

export default class Formatter {
	static formatCurrency(amount: number): string {
		return `$${amount.toFixed(2)}`;
	}
}