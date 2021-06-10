import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './user';
import { jsonIgnoreReplacer } from 'json-ignore';

@Injectable({ providedIn: 'root' })
export class DataService {

	// Ctor
	constructor(private _http: HttpClient) { }

	// Methods
	saveUser(user: User): Observable<any> {
		const data = JSON.stringify(user);

		return this._http.post<any>("http://saveUser:5001", data);
	}

	saveUserWithJsonIgnore(user: User): Observable<any> {
		const data = JSON.stringify(user, jsonIgnoreReplacer);

		return this._http.post<any>("http://saveUserWithJsonIgnore:5001", data);
	}
}
