import { Component } from '@angular/core';

@Component({
  selector: 'app-listcontent',
  standalone: true,
  imports: [],
  templateUrl: './listcontent.component.html',
  styleUrl: './listcontent.component.css'
})
export class ListcontentComponent {
  items:Array<string> = ["Berangkat Sekolah","Kerja in projek","projek selesai","gajian","ngajak main anak orang","repeat"]
}
