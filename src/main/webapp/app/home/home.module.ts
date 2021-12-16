import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { QuizModule } from '../quiz/quiz.module';
import { AppModule } from '../app.module';
import { SummaryModule } from '../summary/summary.module';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([HOME_ROUTE]), QuizModule, SummaryModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
