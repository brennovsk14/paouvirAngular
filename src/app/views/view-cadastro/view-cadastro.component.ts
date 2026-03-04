import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {CadastroComponent} from "../../component/cadastro/cadastro.component";

@Component({
  selector: 'app-view-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, CadastroComponent],
  templateUrl: './view-cadastro.component.html',
  styleUrl: './view-cadastro.component.css'
})
export class ViewCadastroComponent {

}
