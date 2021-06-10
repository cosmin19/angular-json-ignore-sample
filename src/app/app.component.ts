import { Component } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	user: User = new User();

	constructor(private _helloWorldService: DataService) { }

	saveUser(): void {
		this._helloWorldService.saveUser(this.user).subscribe();
	}

	saveUserWithJsonIgnore(): void {
		this._helloWorldService.saveUserWithJsonIgnore(this.user).subscribe();
	}
}
