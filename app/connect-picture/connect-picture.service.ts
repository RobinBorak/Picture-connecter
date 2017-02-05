import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectPictureService {

	constructor(private http: Http) { }

	getConnectPictures() {
		return this.http.get('./data/pictures_structure.json').map(
			response => response.json().pictures
		);
	}
}