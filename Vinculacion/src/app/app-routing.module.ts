import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'secciones', loadChildren: './secciones/secciones.module#SeccionesPageModule' },  { path: 'subsecciones', loadChildren: './subsecciones/subsecciones.module#SubseccionesPageModule' },
  { path: 'preguntas', loadChildren: './preguntas/preguntas.module#PreguntasPageModule' },
  { path: 'nacionalidades', loadChildren: './nacionalidades/nacionalidades.module#NacionalidadesPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
