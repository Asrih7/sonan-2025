import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'advices', loadChildren: () => import('./advices/advices.module').then(m => m.AdvicesModule) },
  { path: 'sonan', loadChildren: () => import('./sonan/sonan.module').then(m => m.SonanModule) },
  { path: 'sonan-with-wife', loadChildren: () => import('./sonan-with-wife/sonan-with-wife.module').then(m => m.SonanWithWifeModule) },
  { path: 'adhkar', loadChildren: () => import('./adhkar/adhkar.module').then(m => m.AdhkarModule) },
  { path: 'forgettable-sonan', loadChildren: () => import('./forgettable-sonan/forgettable-sonan.module').then(m => m.ForgettableSonanModule) },
  { path: 'configurations', loadChildren: () => import('./configurations/configurations.module').then(m => m.ConfigurationsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
