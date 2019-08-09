import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { StorageService } from 'src/app/services/storage.service';
import { Subscription } from 'rxjs';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  title = 'MSN 2019';
  sub: Subscription;
  constructor(
    private router: Router,
    private socketService: SocketService,
    public storageService: StorageService,
    private localNotifications: LocalNotifications,
    private platform: Platform,
    public alertCtlr: AlertController
  ) {
    this.platform.ready().then(() => {
      this.localNotifications.on('trigger').subscribe(res => {
        this.showAlert();
      });
      this.localNotifications.on('click').subscribe(res => {
        this.showAlert();
      });
    });
  }

  showAlert() {
    this.alertCtlr.create({
      header: 'HOLA',
      message: 'HAS RECIBIDO?',
      buttons: ['Ok']
    }).then(alert => alert.present());
  }

  ngOnInit() {
    this.router.navigate(['/navigation/contacts']);
  }

}
