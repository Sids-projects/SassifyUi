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

@NgModule({
  declarations: [
    UiCompsComponent,
    ButtonComponent,
    CardComponent,
    DropdownComponent,
    InputsComponent,
    TableComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class UiCompsModule {}
