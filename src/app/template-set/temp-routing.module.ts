import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateSetComponent } from './template-set.component';
import { SassifyEditionComponent } from './components/sassify-edition/sassify-edition.component';
import { SidenavSetComponent } from './components/sidenav-set/sidenav-set.component';

const routes: Routes = [
  {
    path: 'TempSetRouting',
    component: TemplateSetComponent,
    children: [
      { path: 'SassifyEdition-router', component: SassifyEditionComponent },
      { path: 'SidenavSet-router', component: SidenavSetComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempsetRoutingModule {}
