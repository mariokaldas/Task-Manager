import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  selector: 'app-footer',
})
export class Footer implements OnInit{
  counter: number = 0;

  constructor(private ref:ChangeDetectorRef){}

  ngOnInit(): void {
    setInterval(() => {
      this.counter++;
      this.ref.markForCheck()
    }, 1000);
  }
}
