import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/path_of_exile', pathMatch: 'full' },
  { path: 'path_of_exile', loadChildren: () => import('./path-of-exile/path-of-exile.module').then(mod => mod.PathOfExileModule) },
  { path: '**', redirectTo: '/path_of_exile', pathMatch: 'full' } ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
