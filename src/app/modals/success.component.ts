import { Component, ViewChild, EventEmitter, Injectable } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal';
 
@Component({
  selector: 'success-modal',
  templateUrl: './success.component.html'
})
export class SuccessComponent {
	@ViewChild('successModal') public successModal : ModalDirective;

	constructor(){}

	public showModal():void {
		this.successModal.show();
	}

	public hideModal():void {
		this.successModal.hide();
	}

	public confirm():void {
		this.hideModal();
	}

}