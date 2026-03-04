import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {BotaoComponent} from "../botao/botao.component";
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, BotaoComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  acessarPaouvir() {
    this.router.navigate(['/menu']);
  }

}
