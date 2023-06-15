import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { AssetsPreviewComponent } from './common-components/assets-preview/assets-preview.component';
import { NetworkCheckComponent } from './common-components/network-check/network-check.component';
import { ErrorHandlerPageComponent } from './common-components/error-handler-page/error-handler-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: 'asset-preview', component: AssetsPreviewComponent },
  {
    path: 'network-check',
    component: NetworkCheckComponent,
  },
  {
    path: 'error',
    component: ErrorHandlerPageComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];

const config: ExtraOptions = {
  useHash: false,
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
