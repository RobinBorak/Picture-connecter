import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { StateService } from 'ui-router-core';
import { AuthService } from './global/auth.service';
import { AppConfigService } from './global/app-config.service';

/**
 * This is the main app component for an authenticated user.
 *
 * This component renders the outermost chrome
 * (application header and tabs, the compose  and logout button)
 * It has a `ui-view` viewport for nested states to fill in.
 */
@Component({
  selector: 'app-root',
  template: `
    <div #dialogdiv></div>
    <div class="navheader">
      <ul *ngIf="isAuthenticated" class="nav nav-tabs">

        <li uiSrefActive="active"> <a uiSref="prefs" role="button"> Preferences </a> </li>

        <li class="navbar-right">
          <button class="btn btn-primary fa fa-home" uiSref="home"></button>
        </li>

        <li class="navbar-text navbar-right logged-in-user" style="margin: 0.5em 1.5em;">
          <div>
            {{emailAddress}} <i class="fa fa-chevron-down"></i>
            <div class="hoverdrop">
              <button class="btn btn-primary" (click)="logout()">Log Out</button>
            </div>
          </div>
        </li>

      </ul>
    </div>

    <ui-view></ui-view>
`
  ,
  styles: []
})
export class AppComponent implements OnInit {

  // data
  emailAddress;
  isAuthenticated;

  constructor(appConfig: AppConfigService,
              public authService: AuthService,
              public $state: StateService
  ) {
    this.emailAddress = appConfig.emailAddress;
    this.isAuthenticated = authService.isAuthenticated();
  }

  ngOnInit() {
    
  }

  show() {
    
  }

  logout() {
    const { authService, $state } = this;
    authService.logout();
    // Reload states after authentication change
    return $state.go('welcome', {}, { reload: true });
  }
}
