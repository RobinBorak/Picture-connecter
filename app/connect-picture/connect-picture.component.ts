import {Component, OnInit} from '@angular/core';
import {ConnectPictureService} from './connect-picture.service';
import {PictureCanvasService} from './canvas/connect-picture.canvas.service';


@Component({
	selector: 'connect-picture',
	template: require('./connect-picture.component.html'),
	providers: [ConnectPictureService, PictureCanvasService]
})
export class ConnectPictureComponent implements OnInit{
	title: string = 'ConnectPicture Page';
	body:  string = 'This is the ConnectPicture page body';
	message: string = 'static message';
	connectPictures;

  
	constructor(private connectPictureService: ConnectPictureService, private pictureCanvasService: PictureCanvasService) { }

	ngOnInit() {
		this.connectPictureService.getConnectPictures().subscribe(connectPictures =>{
			this.connectPictures = connectPictures;
			let canvasElementRef = this.pictureCanvasService.canvasNew('canvas-container', connectPictures);
			this.pictureCanvasService.canvasListenersInit('canvas-container');
			//initialize listeners
		});
	}

	
}
