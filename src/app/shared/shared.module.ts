import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [ColumnOneComponent, HeaderComponent, HomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [ColumnOneComponent],
})
export class SharedModule {}
