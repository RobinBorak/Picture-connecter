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
		//document.getElementById('header').style.display = 'none';
		//document.getElementById('container').style.paddingTop = '0px';
		this.connectPictureService.getConnectPictures().subscribe(connectPictures =>{
			this.connectPictures = connectPictures;
			let canvasElementRef = this.pictureCanvasService.canvasNew('canvas-container', connectPictures);
			this.pictureCanvasService.canvasListenersInit('canvas-container');
			//initialize listeners
		});
	}

	
}
