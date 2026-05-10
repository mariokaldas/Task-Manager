import { Injectable, signal } from '@angular/core';
import { notificationCat, notificationType, resetNotification } from '../components/utils/notificationTypes';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  notification = signal<notificationType>(resetNotification())

  generateNotification(cat: notificationCat, msg:string){
    this.notification.update(not => ({category : cat,message:msg }))
  }
}

