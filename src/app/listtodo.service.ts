import { Injectable } from '@angular/core';

import { AuthHttp, AuthConfig,JwtHelper } from 'angular2-jwt';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class ListtodoService {
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
  addTodo(todo){
    console.log("cmtodoiii ttodo"+todo);
    return this.http.post('http://localhost:3000/task/addTask', todo)
    .map((res) => {
      
      if (res.status === 200) { 
         return true; } 
      else 
      { return res.json().message; }
    });
  
  }
  // consomation  de l'api  get  all  task/todo  list  image
  getTodos(iduser){
    return this.http.get('http://localhost:3000/task/'+iduser+'/getTasks')
    .map((res)=>{
      if(res.status===200)
      return res.json()
      else {
        console.log(res.json().message);
        return res.json().message;
      }
      
    })

  }

  /// consomation de l'api  ajout  image  

uploadAnswer(formData:any){  
 
 return this.http.post('http://localhost:3000/task/Add_img_task',formData)
 .map((res) => {   
   console.log(res);
    return res.json().message;
  });
  }
//consomation de l'api  delete image
  deleteImage(dataImage, iduser){
    return this.http.get('http://localhost:3000/task/'+iduser+'/'+dataImage.title+'/'+dataImage.name+'/deleteTaskImage')
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
  deleteTaskAndList(dataTaskList ,iduser){
    
    return this.http.get('http://localhost:3000/task/'+iduser+'/'+dataTaskList.param+'/deleteTask')
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
  updateAnyTask(data,iduser){
   return this.http.post('http://localhost:3000/task/'+iduser+'/'+data.position+'/update_task',data)
   .map((res) => {   
   console.log(res);
    return res.json().message;
  });
  }

}