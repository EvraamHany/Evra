import { Route } from '@angular/router';
import { SummaryComponent } from './summary.component';

export const SUMMARY_ROUTE: Route = {
  path: '',
  component: SummaryComponent,
  data: {
    pageTitle: 'quiz.title',
  },
};
