import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  // Modules
  {
    path: 'UiCompsModule',
    loadChildren: () =>
      import('./ui-comps/ui-comps.module').then((m) => m.UiCompsModule),
  },
  {
    path: 'TempSetModule',
    loadChildren: () =>
      import('./template-set/template-set.module').then(
        (m) => m.TemplateSetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
