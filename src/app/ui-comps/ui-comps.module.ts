import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiCompsComponent } from './ui-comps.component';

// Components
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { TableComponent } from './components/table/table.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { NavComponent } from './components/nav/nav.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    UiCompsComponent,
    ButtonComponent,
    CardComponent,
    DropdownComponent,
    InputsComponent,
    TableComponent,
    AccordionComponent,
    NavComponent,
    MenubarComponent,
    TabsComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class UiCompsModule {}
