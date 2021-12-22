import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'jhi-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent {
  questions: any;
  choices: any;
  answers: any;
  questionIndex = 0;
  totalQuestions: any;
  finished: any;
  answered;
  score;

  clickAnswer: EventEmitter<any> = new EventEmitter();
  selectedIndex: any;
  private readonly destroy$ = new Subject<void>();

  constructor() {
    this.answered = false;
    this.questionIndex = 0;
    this.finished = false;
    console.log(this.questionIndex);
    this.questions = [
      'Which of the following is a reserved keyword in C#?',
      'Which of the following is correct about value type variables in C#?  ',
      'Which of the following converts a type to a double type in C#?',
      'Which of the following operator returns the size of a data type in C#?',
      'Which of the following access specifier in C# allows a class to expose its member variables and member functions to other functions and objects?',
      'Bonus Question',
    ];
    this.choices = [
      ['abstract', 'as', 'foreach', 'All of the above'],
      [
        'The value types directly contain data. ',
        'int, char, and float, which stores numbers, alphabets, and floating point numbers, respectively are value types.',
        'When you declare an int type, the system allocates memory to store the value.',
        'All of the above',
      ],
      ['ToDecimal', 'ToDouble', 'ToInt16', 'ToInt32'],
      ['sizeof', 'typeof', '&</a>', '*'],
      ['Public', 'Private', 'Protected', 'Internal'],
      ['Wrong', 'Wrong2', 'Correct', 'Incorrect'],
    ];
    this.answers = [3, 3, 1, 0, 0, 2];
    this.totalQuestions = this.choices.length;
    console.log(this.totalQuestions);
    this.score = 0;
  }

  clickChoice(event: any): void {
    // alert(event.target.id,);

    this.answered = true;
    this.selectedIndex = parseInt(event.target.id.replace('choice', ''), 10);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  resetQuiz(): void {
    this.questionIndex = 0;
    this.finished = false;
    this.answered = false;
    this.score = 0;
  }

  nextQuestion(): void {
    if (this.finished) {
      //Retake the Quiz
      this.resetQuiz();
    } else {
      if (!this.answered) {
        alert('Please select an answer.');
        return;
      }

      this.answered = false;
      this.checkAnswer(this.selectedIndex);

      this.selectedIndex = -1;
      if (this.questionIndex < this.totalQuestions - 1) {
        this.questionIndex++;
      } else {
        this.finished = true;
      }
    }
  }

  checkAnswer(selectedIndex: any): void {
    if (this.answers[this.questionIndex] === selectedIndex) {
      //Answer is correct
      this.score++;
    }
  }
}
