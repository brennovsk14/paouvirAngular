import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {

  @Input() texto?: string;
  @Input() tipo?: 'login' | 'cadastro' | 'menu';

  get textoBotao(): string {

    switch (this.tipo){
      case'login':
        return 'Entrar';
      case 'cadastro':
        return 'Cadastre-se';
      case 'menu':
        return 'menu';
      default:
        return this.texto || 'botão';
    }
  }

  get classeBotao(): string {
    return `botao-${this.tipo}`;
  }

}
