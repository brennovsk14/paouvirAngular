import { Component } from '@angular/core';
import {UmAlbumComponent} from "../../component/um-album/um-album.component";

@Component({
  selector: 'app-view-um-album',
  standalone: true,
  imports: [UmAlbumComponent],
  templateUrl: './view-um-album.component.html',
  styleUrl: './view-um-album.component.css'
})
export class ViewUmAlbumComponent {

}
