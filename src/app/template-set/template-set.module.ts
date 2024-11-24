import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateSetComponent } from './template-set.component';
import { SassifyEditionComponent } from './components/sassify-edition/sassify-edition.component';
import { SidenavSetComponent } from './components/sidenav-set/sidenav-set.component';

@NgModule({
  declarations: [
    TemplateSetComponent,
    SassifyEditionComponent,
    SidenavSetComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class TemplateSetModule {}
