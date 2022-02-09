import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  doLogin() {
    alert('Login clicked.');
  }

  launchSite() {
    window.open('https://community.wearezipline.com/ionic-login-test.php', '_system');
  }
}
