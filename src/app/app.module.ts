import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login.component';
import { ConnectPictureComponent } from './connect-picture/connect-picture.component';
import { UIRouterModule, UIView } from 'ui-router-ng2';
import { APP_STATES } from './app.states';
import { GlobalModule } from './global/global.module';
import { routerConfigFn } from './router.config';
import { PictureCanvasService } from './connect-picture/canvas/connect-picture.canvas.service';
import { ConnectPictureService } from './connect-picture/connect-picture.service';

//Modals
import { SuccessComponent } from './modals/success.component';
import { UserSelectComponent } from './modals/userSelect.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectPictureComponent,
	SuccessComponent,
    LoginComponent,
	UserSelectComponent,
    WelcomeComponent
  ],
  imports: [
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: { state: 'welcome' },
      config: routerConfigFn,
    }),
	ModalModule.forRoot(),
//	Ng2BootstrapModule.forRoot(),
    GlobalModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
	PictureCanvasService,
	ConnectPictureService
  ],
  bootstrap: [UIView]
})
export class AppModule { }
