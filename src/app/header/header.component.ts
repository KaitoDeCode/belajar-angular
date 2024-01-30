import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <p>
      header works!
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
