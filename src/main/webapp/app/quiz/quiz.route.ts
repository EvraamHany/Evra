import { Route } from '@angular/router';
import { QuizComponent } from './quiz.component';

export const QUIZ_ROUTE: Route = {
  path: '',
  component: QuizComponent,
  data: {
    pageTitle: 'quiz.title',
  },
};
