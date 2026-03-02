import { Component } from '@angular/core';
import {LoginComponent} from "../../component/login/login.component";

@Component({
  selector: 'app-view-login',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './view-login.component.html',
  styleUrl: './view-login.component.css'
})
export class ViewLoginComponent {

}
