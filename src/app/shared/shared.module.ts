import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, CardComponent],
  exports: [HeaderComponent, CardComponent],
})
export class SharedModule {}
