import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppPipeModule } from 'src/pipes/app.pipe.module';
import { InitPageRoutingModule } from './init-routing.module';
import { InitPage } from './init.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitPageRoutingModule,
    AppPipeModule,
  ],
  declarations: [InitPage],
})
export class InitPageModule {}
