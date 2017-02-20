import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { Transition } from 'ui-router-core';
import {ConnectPictureService} from './connect-picture.service';
import {PictureCanvasService} from './canvas/connect-picture.canvas.service';
import {SuccessComponent} from '../modals/success.component';
import { UserSelectComponent } from '../modals/userSelect.component';


@Component({
  selector: 'connect-picture',
  template: require('./connect-picture.component.html'),
  styles: []
})
export class ConnectPictureComponent implements AfterViewInit{
	title: string = 'ConnectPicture Page';
	body:  string = 'This is the ConnectPicture page body';
	message: string = 'static message';
	connectPictures;
	userIsSet: boolean = false;
	@ViewChild(SuccessComponent) successComponent : SuccessComponent;
	@ViewChild(UserSelectComponent) userSelectComponent:UserSelectComponent;
  
	constructor(private connectPictureService: ConnectPictureService, 
				private elementRef: ElementRef,
				private pictureCanvasService: PictureCanvasService,
				private $transition$: Transition
				) { }
  

	ngAfterViewInit() {
		//$viewchild in modal components is not defined in NgOnInit.
		this.init();

	}

	init=()=>{
		if(true || this.userIsSet){
			//Throw modal to set user().then({ => result, data/user => this.userIsSet=true
			this.userSelectComponent.showModal();
			this.userSelectComponent.userSelectModal.onHidden.subscribe(
				response => {
					console.log("data passed from userSelectModal: ", response.data);
					this.loadAndInitConnectPicture(response.data);
				}
			);
			
		}else{
			//this.loadAndInitConnectPicture();
		}


		this.pictureCanvasService.successDraw.subscribe(
			response => {
				this.successComponent.showModal();
			}
		);
		
		this.successComponent.successModal.onHidden.subscribe(
			response => {
				
				if(true || this.userIsSet){
					//Navigate back to welcome
					console.log("Navigate back to welcome");
					this.$transition$.router.stateService.go('welcome', {}, {reload:true});
					if(document.getElementsByClassName('modal-backdrop').length) document.getElementsByClassName('modal-backdrop')[0].parentNode.removeChild(document.getElementsByClassName('modal-backdrop')[0]); //modal-backdrop seems to be stuck sometimes.
				}else{
					//this.init();
				}
			}
		);

	}
	loadAndInitConnectPicture=(data)=>{
		this.connectPictureService.getConnectPictures(data.level.id).subscribe(connectPictures =>{
			this.connectPictures = connectPictures;
			let canvasElementRef = this.pictureCanvasService.canvasNew('canvas-container', connectPictures, this.elementRef);
			this.pictureCanvasService.canvasListenersInit('canvas-container');
			//initialize listeners
		});
	}
	
}