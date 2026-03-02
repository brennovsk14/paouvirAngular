import { Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {CadastroComponent} from "./component/cadastro/cadastro.component";
import {MenuComponent} from "./component/menu/menu.component";
import {ViewLoginComponent} from "./views/view-login/view-login.component";

export const routes: Routes = [


  {
    path: '',
    component: ViewLoginComponent, // Layout público para rotas não autenticadas

  },
  {
    path: 'cadastro',
    component: CadastroComponent, // Layout público para rotas não autenticadas

  },
  {
    path: 'menu',
    component: MenuComponent, // Layout público para rotas não autenticadas

  },

];
