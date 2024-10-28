import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Modules
import { MatIconModule } from '@angular/material/icon';
import { ComponentsComponent } from './screens/components/components.component';
import { TemplatesComponent } from './screens/templates/templates.component';

@NgModule({
  declarations: [AppComponent, ComponentsComponent, TemplatesComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
