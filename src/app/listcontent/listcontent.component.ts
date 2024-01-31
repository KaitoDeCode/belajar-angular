import { Component } from '@angular/core';
import { NOTES } from '../Data/Notes';

@Component({
  selector: 'app-listcontent',
  standalone: true,
  imports: [],
  templateUrl: './listcontent.component.html',
  styleUrl: './listcontent.component.css'
})
export class ListcontentComponent {
  items = NOTES;
  handleClick(title:string){
    alert(title)
  }
}
