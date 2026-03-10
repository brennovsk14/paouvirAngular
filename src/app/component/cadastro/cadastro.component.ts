import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {BotaoComponent} from "../botao/botao.component";
import {InputComponent} from "../input/input.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, BotaoComponent, InputComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private router: Router) {}

  perfil = [
    { perfil: 'Banda', valor: 'bd' },
    { perfil: 'Artista', valor: 'at' },
    { perfil: 'Ouvinte', valor: 'ov' }
  ];

  acessarLogin() {
    this.router.navigate(['']);
  }

}
