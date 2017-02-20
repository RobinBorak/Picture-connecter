import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectPictureService {

	constructor(private http: Http) { }
	pictureDataHolder;

	getConnectPictures() {
		return this.http.get('./data/pictures_structure.json').map(
			response => response.json().pictures
		);
	}

	shuffle(sourceArray) {
		for (var i = 0; i < sourceArray.length - 1; i++) {
			var j = i + Math.floor(Math.random() * (sourceArray.length - i));

			var temp = sourceArray[j];
			sourceArray[j] = sourceArray[i];
			sourceArray[i] = temp;
		}
		return sourceArray;
	}

	sortPictures(pictureDataArg){
		//odd array position is on the left side, even right side.
		let pictureData = (Object.assign([], pictureDataArg));
		pictureData = this.shuffle(pictureData);
		this.pictureDataHolder = (Object.assign([], pictureData));
		let pictureFirstAr = [];
		let pictureSecondAr = [];
		let pictureDataSorted = [];

		for(let i = 0; i<pictureData.length; i++){
			let currentPicture = pictureData[i];
			console.log(currentPicture);
			let firstPicIndex = this.pictureIndexByIdGet(currentPicture.id);
			let secondPicIndex = this.pictureIndexByIdGet(currentPicture.related[0].picture.id);
			if(firstPicIndex !== 999 && !pictureData[firstPicIndex].handled){
				pictureFirstAr.push(pictureData[firstPicIndex]);
				pictureData[firstPicIndex].handled = true;
			}
			if(secondPicIndex !== 999 && !pictureData[secondPicIndex].handled){
				pictureSecondAr.push(this.pictureDataHolder[secondPicIndex]);
				pictureData[secondPicIndex].handled = true;
			}
			
		}
		pictureFirstAr = this.shuffle(pictureFirstAr);
		pictureSecondAr = this.shuffle(pictureSecondAr);
		for(let i = 0; i<pictureFirstAr.length; i++){
			pictureDataSorted.push(pictureFirstAr[i]);
			pictureDataSorted.push(pictureSecondAr[i]);
		}

		return pictureDataSorted;
	}

	pictureIndexByIdGet(id){
		for(let i = 0; i<this.pictureDataHolder.length; i++){
			if(this.pictureDataHolder[i].id === id) return i;
		}
		return 999;
	}

}