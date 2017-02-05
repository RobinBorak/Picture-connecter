import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {ConnectPictureComponent} from './connect-picture/connect-picture.component';
import {HomeComponent} from './home/home.component';


@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [HTTP_PROVIDERS],
})
@Routes([
  {path: '/',            component: HomeComponent },
  {path: '/home',        component: HomeComponent },
  {path: '/connect-picture', component: ConnectPictureComponent },
  {path: '/*',           component: HomeComponent }
])
export class AppComponent {}
