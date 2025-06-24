import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./paginas/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./paginas/inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'panel-admin',
    loadChildren: () => import('./paginas/panel-admin/panel-admin.module').then( m => m.PanelAdminPageModule)
  },
  {
    path: 'detalles-submit',
    loadChildren: () => import('./paginas/detalles-submit/detalles-submit.module').then( m => m.DetallesSubmitPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
