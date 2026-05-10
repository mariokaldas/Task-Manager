import {
  Component,
  effect,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { notificationCat } from '../utils/notificationTypes';
import { NotificationService } from '../../services/notification-service';

declare var bootstrap: any;

@Component({
  selector: 'app-notification',
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  notificationService = inject(NotificationService);

  @ViewChild('toastElement')
  toastElement!: ElementRef;

  readonly notificationCat = notificationCat;

  notification = this.notificationService.notification;

  constructor() {
    effect(() => {
      const data = this.notification();

      if (this.toastElement && data.message != '') {
        const myToast = bootstrap.Toast.getOrCreateInstance(this.toastElement.nativeElement, {
          delay: 3000,
        });
        myToast.show();
      }
    });
  }
}
