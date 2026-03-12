import { Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {CadastroComponent} from "./component/cadastro/cadastro.component";
import {MenuComponent} from "./component/menu/menu.component";
import {ViewLoginComponent} from "./views/view-login/view-login.component";
import {ViewCadastroComponent} from "./views/view-cadastro/view-cadastro.component";
import {ViewBandasComponent} from "./views/view-bandas/view-bandas.component";
import {ViewAlbunsComponent} from "./views/view-albuns/view-albuns.component";
import {ViewMusicasComponent} from "./views/view-musicas/view-musicas.component";
import {ViewUmAlbumComponent} from "./views/view-um-album/view-um-album.component";
import {ViewUmaBandaComponent} from "./views/view-uma-banda/view-uma-banda.component";

export const routes: Routes = [


  {
    path: '',
    component: ViewLoginComponent, // Layout público para rotas não autenticadas

  },
  {
    path: 'cadastro',
    component: ViewCadastroComponent, // Layout público para rotas não autenticadas

  },
  {
    path: 'menu',
    component: MenuComponent, // Layout público para rotas não autenticadas

  },
  {
    path: 'bandas',
    component: ViewBandasComponent,

  },
  {
    path: 'albuns',
    component: ViewAlbunsComponent,

  },
  {
    path: 'musicas',
    component: ViewMusicasComponent,

  },

  {
    path: 'albumtal',
    component: ViewUmAlbumComponent,

  },

  {
    path: 'bandatal',
    component: ViewUmaBandaComponent,

  },

];
