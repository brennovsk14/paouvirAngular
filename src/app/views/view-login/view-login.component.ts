import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {LoginComponent} from "../../component/login/login.component";

@Component({
  selector: 'app-view-login',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent],
  templateUrl: './view-login.component.html',
  styleUrl: './view-login.component.css'
})
export class ViewLoginComponent {

}
