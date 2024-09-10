import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  qCategories: string[] = [];
  selectedCategory: string = '';
  questions: {
    title: string;
    answer_1: string;
    answer_2: string;
    answer_3: string;
    answer_4: string;
    right_answer: string;
    Categories: string;
  } [] = [];

  @ViewChild('bullets') bullets: ElementRef | undefined;
  @ViewChild('quizArea', { static: true }) quizArea!: ElementRef;
  @ViewChild('answersArea', { static: true }) answersArea!: ElementRef;
  @ViewChild('submitAnswer', { static: true }) submitAnswer!: ElementRef;
  @ViewChild('resultsContainer', { static: true }) resultsContainer!: ElementRef;

  currentIndex: number = 0;
  rightAnswers: number = 0;
  totalQuestions: number = 0;
  resultMessage: string = '';
  showResultsContainer: boolean = false;
  results: number [] = [];


  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.qCategories = this.questionService.getCategories();
    this.loadQuestions('HTML');
  }

  loadQuestions(category: string) {
    this.selectedCategory = category;
    this.questions = this.questionService.getQuestionsByCategory(category) || [];
    this.currentIndex = 0;
    this.rightAnswers = 0;
    this.totalQuestions = this.questions.length;
    this.handleBullets();
    this.showResultsContainer = false;
  }

  filterCategory(event: any) {
    let value = event.target.value;
    console.log('Selected Category:', value);
    this.loadQuestions(value);
  }

  onSubmit() {
    this.checkAnswer(this.questions[this.currentIndex].right_answer);
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.handleBullets();
    } else {
      this.showResults(this.totalQuestions);
    }
  }

  checkAnswer(rAnswer: string): void {
    const answers = document.getElementsByName('question') as NodeListOf<HTMLInputElement>;
    let theChoosenAnswer: string | undefined;
    answers.forEach((answer) => {
      if (answer.checked) {
        theChoosenAnswer = answer.value;
      }
    });
    if (rAnswer === theChoosenAnswer) {
      this.rightAnswers++;
    }
  }

  showResults(count: number): void {
    let theResults: string;
    if(this.currentIndex === count - 1) {
      if (this.rightAnswers > count / 2 && this.rightAnswers < count) {
        theResults = `${this.rightAnswers} From ${count}`;
      } else if (this.rightAnswers === count) {
        theResults = `All Answers Are Good`;
      } else {
        theResults = `${this.rightAnswers} From ${count}`;
      }
      this.resultMessage = theResults;
      this.showResultsContainer = true;
    }
    this.results.push(this.rightAnswers)
  }

  getResultClass() {
    if (this.rightAnswers === this.totalQuestions) {
      return 'all';
    } else if (this.rightAnswers > this.totalQuestions / 2) {
      return 'half';
    } else {
      return 'bad';
    }
  }

  handleBullets(): void {
    if(this.bullets) {
      let bulletsSpans = this.bullets.nativeElement.querySelectorAll(".spans span");
      let arrayOfSpans = Array.from(bulletsSpans) as HTMLElement[];
      arrayOfSpans.forEach((span, index) => {
        if (this.currentIndex === index) {
          span.className = "on";
        } else {
          span.className = "";
        }
      });
    }
  }

}





