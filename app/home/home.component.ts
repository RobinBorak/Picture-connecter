import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'home',
	template: require('./home.component.html')
})

export class HomeComponent implements OnInit {
	title: string = 'Home Page';
	body:  string = 'This is the about home body';

	constructor() { }

	ngOnInit() {
	}

}


/*
  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
*/