import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {

  @Input() texto?: string;
  @Input() tipo?: string = 'primary';
  @Input() link?: string;



  get classeBotao(): string {
    return `botao-${this.tipo}`;
  }

}
