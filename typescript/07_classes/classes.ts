// 一個動物介面
interface Animal {
	makeSound(): void;
	getAge(): number;
}

// 基礎類別
class Pet {
	constructor(protected name: string) {
		console.log(`Creating new pet: ${name}`);
	}

	protected getDescription(): string {
		return `This is ${this.name}`;
	}
}

// 主要類別
class Dog extends Pet implements Animal {
	static species = "Canis lupus familiaris";
	readonly type: string = "dog";
	private _age: number;

	constructor(name: string, age: number) {
		super(name);
		this._age = age;
	}

	public makeSound(): void {
		console.log(`${this.name} says: Woof!`);
	}

	// getter
	get age(): number {
		return this._age;
	}

	// setter
	set age(value: number) {
		if (value > 0) {
			this._age = value;
		}
	}

	public getAge(): number {
		return this.age;
	}

	// Instance cant call this func
	protected getDogDescription(): string {
		console.log(this.getDescription);
		console.log(this.getOtherInformation());
		return "Dog Desc."
	}

	private getOtherInformation(): string {
		return "Dog Details"
	}
}

// 測試程式
function demo() {
	console.log("=== Starting Dog Test ===");

	// 創建實例
	const myDog = new Dog("Buddy", 3);

	// 存取靜態屬性
	console.log(`Species: ${Dog.species}`);

	// 存取唯讀屬性
	console.log(`Type: ${myDog.type}`);

	// 使用方法
	myDog.makeSound();


	// 使用 getter
	console.log(`Age: ${myDog.age}`);

	// 使用 setter
	myDog.age = 4;
	console.log(`New age: ${myDog.age}`);

	console.log("=== Test Complete ===");
}

// 執行測試
demo();