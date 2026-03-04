import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})

export class InputComponent {

  @Input() label?: string;
  @Input() tipo: 'text' | 'date' | 'password' | 'email' |'select'|'username' = 'text';
  @Input() placeholder?: string;
  @Input() opcoes?: { perfil: string; valor: string }[];

}
