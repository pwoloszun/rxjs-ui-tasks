import { Component } from '@angular/core';

import { mainMenuSections } from './routing/link-sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  title = `rxjs-ui-tasks`;
  sections = mainMenuSections;

}
