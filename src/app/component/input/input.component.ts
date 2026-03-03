import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})

export class InputComponent {

  @Input() label?: string;
  @Input() tipo: 'text' | 'date' | 'password' | 'email' |'select' = 'text';
  @Input() placeholder?: string;
  @Input() opcoes?: { perfil: string; valor: string }[];

}
