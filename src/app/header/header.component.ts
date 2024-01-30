import { BindingType } from '@angular/compiler';
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
    <p>Ini adalah projek simple saya dalam <span [className]="underline">belajar angular</span></p>
    <button (click)="handleSay()">Say Hello</button>
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
  underline:string = "text-underline"
  handleSay(){
    alert("Hello World")
  }

}
