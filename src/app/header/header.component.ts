import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <div class="container">
    <p>
      Welcome <span>Todo Apps</span>
    </p>
    <p>Ini adalah projek simple saya dalam belajar angular</p>
  </div>
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
