import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'fundamentals',
    loadChildren: () => import('../features/fundamentals/fundamentals.module').then(m => m.FundamentalsModule)
  },
  { path: '', redirectTo: '/fundamentals/dashboard', pathMatch: 'full' },

  {
    path: 'flattening-operators',
    loadChildren: () => import('../features/flattening-operators/flattening-operators.module').then(m => m.FlatteningOperatorsModule)
  },

  {
    path: 'combine-streams',
    loadChildren: () => import('../features/combine-streams/combine-streams.module').then(m => m.CombineStreamsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
