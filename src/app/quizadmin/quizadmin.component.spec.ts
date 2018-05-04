import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quizadmin',
  templateUrl: './quizadmin.component.html',
  styleUrls: ['./quizadmin.component.css']
})
export class QuizadminComponent implements OnInit {
  myGroup: FormGroup;
  dataquiz ;
  displayedColumns=['question','reponse']
 
  constructor(private fb: FormBuilder, private quizService: QuizService, private router: Router) { 
    this.myGroup = fb.group(
      {
        'question': ['', [Validators]],
        'reponse': ['', [Validators]],
       
      }
    );
  }
  errMessage = "" ;
  ngOnInit() {
    this.getAllQuest();
    
  }
  addQuest() {
    let  iduser =this.quizService.useJwtHelper();
    this.quizService.addQuestion(this.myGroup.value ,iduser)
      .subscribe((res) => {
        if (res === true) {
          this.getAllQuest();
          this.router.navigateByUrl('quizadmin');
        } else {
          this.errMessage = res;
        }
      });
    

  }
  home(){
    this.router.navigateByUrl('');
  }
  
  getAllQuest(){
    let iduser = this.quizService.useJwtHelper();
    this.quizService.getQuestions(iduser).subscribe((res)=>{
      this.dataquiz = res;
      console.log(this.dataquiz);});
  }
}