import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { FormBuilder, FormGroup ,Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ListtodoService } from '../listtodo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date;
  mode;
  dataSources ;
  done;
  errMessage;
  constructor(  
      private authService: AuthService,
      private router: Router ) { }
      ngOnInit() {
      }

      onClickLogout() {
        this.authService.logout();
        this.router.navigateByUrl('login');
      }
    }



