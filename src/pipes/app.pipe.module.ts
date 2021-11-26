import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SafeUrlPipe } from './safe-url-pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SafeUrlPipe],
  providers: [SafeUrlPipe],
  exports: [SafeUrlPipe],
})
export class AppPipeModule {}
