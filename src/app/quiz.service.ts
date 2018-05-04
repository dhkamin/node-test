import { Injectable } from '@angular/core';

import { AuthHttp, AuthConfig,JwtHelper } from 'angular2-jwt';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable()
export class QuizService {
  headers: Headers;

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: Http) { 
   
  
  }

  useJwtHelper() {
    var token = localStorage.getItem("token");
   
    console.log(
      this.jwtHelper.decodeToken(token),
      
    );
    return  this.jwtHelper.decodeToken(token).id;
  }
  //  consomation de l'api ajout  task/todo   list
  addQuestion(question){
    console.log("cmtodoiii ttodo"+question);
    return this.http.post('http://localhost:3000/quiz/addQuestion', question)
    .map((res) => {
      
      if (res.status === 200) { 
         return true; } 
      else 
      { return res.json().message; }
    });
  
  }
  // consomation  de l'api  get  all  task/todo  list  image
  getQuestions(iduser){
    return this.http.get('http://localhost:3000/quiz/'+iduser+'/getQuestions')
    .map((res)=>{
      if(res.status===200)
      return res.json()
      else {
        console.log(res.json().message);
        return res.json().message;
      }
      
    })

  }


  // consomation de l'api delete  task/todo  list
  deleteQuestion(dataTaskList ,iduser){
    
    return this.http.get('http://localhost:3000/quiz/'+iduser+'/'+dataTaskList.param+'/deleteQuestion')
    .map((res)=>{
      if(res.status===200)
      return res.json()
      else {
        console.log(res.json().message);
        return res.json().message;
      }
      
    })
  }
  //consomation  de  l'api  update any task/todo  
  updateQuestion(data,iduser){
   return this.http.post('http://localhost:3000/quiz/'+iduser+'/'+data.position+'/update_Question',data)
   .map((res) => {   
   console.log(res);
    return res.json().message;
  });
  }

}
