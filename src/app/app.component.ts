import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

declare var window;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      window["ApiAIPlugin"].init(
        {
            clientAccessToken: "97a82426cc2d4f20b9e20251f28a100a",
            lang: "en" 
        }, 
        function(result) { 
          alert(result)
        },
        function(error) {
          alert(error)
        }
    );

    });
  }
}

