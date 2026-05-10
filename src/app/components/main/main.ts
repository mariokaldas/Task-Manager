import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../Footer/footer';
import { RouterOutlet } from '@angular/router';
import { Notification } from '../notification/notification';

@Component({
  selector: 'app-main',
  imports: [Header, Footer,Notification, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
}
