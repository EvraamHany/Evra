import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { SUMMARY_ROUTE } from './summary.route';
import { SummaryComponent } from './summary.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([SUMMARY_ROUTE])],
  declarations: [SummaryComponent],
  exports: [SummaryComponent],
})
export class SummaryModule {}
