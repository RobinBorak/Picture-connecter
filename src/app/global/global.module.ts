import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfigService } from './app-config.service';
import { AuthService } from './auth.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AppConfigService,
    AuthService
  ],
  declarations: [

	  ],
  entryComponents: [

	  ],
})
export class GlobalModule { }
