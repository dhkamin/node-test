import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizadmin',
  templateUrl: './quizadmin.component.html',
  styleUrls: ['./quizadmin.component.css']
})
export class QuizadminComponent implements OnInit {
  myGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.myGroup = fb.group(
      {
        'question': ['', [Validators]],
        'reponse': ['', [Validators]],
       
      }
    );
  }
  errMessage = "" ;
  ngOnInit() {
  }
  addQuest() {
    this.authService.register(this.myGroup.value)
      .subscribe((res) => {
        if (res === true) {
          this.router.navigateByUrl('');
        } else {
          this.errMessage = res;
        }
      });

  }

}
