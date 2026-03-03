import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "../../component/login/login.component";

@Component({
  selector: 'app-view-login',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './view-login.component.html',
  styleUrl: './view-login.component.css'
})
export class ViewLoginComponent {

}
