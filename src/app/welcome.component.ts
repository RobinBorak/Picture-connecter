import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <div class="container-fluid">
    
      <!--<h3>What do you want to do?</h3>-->
    
    <div class="home buttons">
      <button uiSref="connectPicture" class="btn btn-primary">
        <h1><i class="fa fa-file-image-o"></i></h1>
        <h1>Picture connect</h1>
      </button>

      <button uiSref="prefs" class="btn btn-primary">
        <h1><i class="fa fa-cogs"></i></h1>
        <h1>Preferences</h1>
      </button>
    </div>


    </div>
`,
  styles: []
})
export class WelcomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
