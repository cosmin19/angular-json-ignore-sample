import { jsonIgnore } from "json-ignore";

export class User {
	firstName: string;
	
	lastName: string;
	
	age: number;

	@jsonIgnore()
	showInList: boolean;

	constructor(firstName?: string, lastName?: string, age?: number) {
		this.firstName = firstName ?? 'Bruce';
		this.lastName = lastName ?? 'Wayne';
		this.age = age ?? 30;
		this.showInList = true;
	}
}