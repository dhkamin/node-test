import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myGroup: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.myGroup = fb.group(
      {
        'email': ['', [Validators.email, Validators.required]],
        'password': ['', Validators.minLength(8)]
      }
    );
  }
  errMessage = "" ;
  ngOnInit() {
  }
  onClickRegister() {
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
