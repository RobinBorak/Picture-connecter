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

	@ViewChild('userSelectModal') public userSelectModal:ModalDirective;

	constructor(){}

	public showModal():void {
		this.userSelectModal.show();
	}

	public hideModal():void {
		this.userSelectModal.hide();
	}

	public selectUser():void {
		this.hideModal();
	}


}