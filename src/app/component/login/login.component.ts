import { Component } from '@angular/core';
import {BotaoComponent} from "../botao/botao.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BotaoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
