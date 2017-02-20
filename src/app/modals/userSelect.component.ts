import { Component, ViewChild, EventEmitter, Injectable } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
 
@Component({
  selector: 'user-select-modal',
  templateUrl: './userSelect.component.html'
})
export class UserSelectComponent {

	usernames: string[] = ['Robin', 'Jakob', 'Leo'];
	user = {
		username: ''
	}
	levels = [
		{
			id: 1,
			name: "Beginner"
		},{
			id: 2,
			name: "Expert"
		}
	]
	selectedLevel = {}

	@ViewChild('userSelectModal') public userSelectModal:ModalDirective;

	constructor(){
		this.selectedLevel = this.levels[0]
		
	}

	public showModal():void {
		this.userSelectModal.show();
	}

	public hideModal():void {
		this.userSelectModal.hide();
	}

	public selectUser():void {
		//export this data
		(this.userSelectModal as any).data = {
			user: this.user,
			level: this.selectedLevel
		};

		this.hideModal();
	}


}