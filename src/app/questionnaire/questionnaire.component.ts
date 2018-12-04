import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  public test:boolean[] = [true, false];
  public testS:string = "Je test les @Input !!";

  constructor() { }

  ngOnInit() {
  }

}
