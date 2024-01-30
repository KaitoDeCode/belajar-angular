import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <p>
      header works! {{ title + nama }}
    </p>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /**
   *
   */
  title:string = "Hello"
  nama:string = "Adi Kurniawan"


}
