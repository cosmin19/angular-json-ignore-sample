import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class HelloWorldService {

	constructor(private http: HttpClient) { }

	getHelloWorldMessage(): string {
		return 'Hello World!';
	}
}
