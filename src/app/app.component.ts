import { Component } from '@angular/core';
import { HelloWorldService } from './hello-world.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title: string = 'medium-sample';
	text: string;

	constructor(private _helloWorldService: HelloWorldService) { }

	doAction(): void {
		this.text = this._helloWorldService.getHelloWorldMessage();
	}
}
