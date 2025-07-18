import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

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
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./paginas/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./paginas/recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./paginas/inventario/inventario.module').then( m => m.InventarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'panel-admin',
    loadChildren: () => import('./paginas/panel-admin/panel-admin.module').then( m => m.PanelAdminPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalles-submit',
    loadChildren: () => import('./paginas/detalles-submit/detalles-submit.module').then( m => m.DetallesSubmitPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'buscar-producto',
    loadChildren: () => import('./paginas/buscar-producto/buscar-producto.module').then( m => m.BuscarProductoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'camara',
    loadChildren: () => import('./paginas/camara/camara.module').then( m => m.CamaraPageModule),
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    loadChildren: () => import('./paginas/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
