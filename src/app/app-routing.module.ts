import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadingModule } from './lazyloading/lazyloading.module';

const routes: Routes = [
  {
    path: 'Lazyloading',
    loadChildren: () =>
      import('./lazyloading/lazyloading.module').then(
        (mod) => mod.LazyloadingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
