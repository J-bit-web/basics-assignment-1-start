import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>This is a warning, you are about to combust!</P>
  `,
  styles: [
    `
    p {
      padding: 20px;
      background-color: mistyrose;
      boarder: 1px solid red;
    }
    `
  ]
})

export class WarningAlertComponent {

}
