import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { QUIZ_ROUTE } from './quiz.route';
import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild([QUIZ_ROUTE])],
  declarations: [QuizComponent],
  exports: [QuizComponent],
})
export class QuizModule {}
