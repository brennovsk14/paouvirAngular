import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BotaoComponent} from "../botao/botao.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, BotaoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
