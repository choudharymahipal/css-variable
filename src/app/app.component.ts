import { Component, ElementRef, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private el: ElementRef) {}

  onChangeColor(color) {
    (this.el.nativeElement as HTMLElement).style.setProperty(
      '--mahi-color',
      color
    );
  }
}
