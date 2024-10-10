import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuarios/create',
    loadChildren: () => import('./usuarios/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'usuarios/edit/:id',
    loadChildren: () => import('./usuarios/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'alumnos/edit/:id',
    loadChildren: () => import('./alumnos/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'alumnos/create',
    loadChildren: () => import('./alumnos/create/create.module').then( m => m.CreatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
