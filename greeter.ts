/// <reference path="./_references.d.ts" />

export class Greeter {
	constructor() {
		console.log('creating greeter')
	}
	
	public greet(name: string): string { 
		return "hello " + name;
	}
}