import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  user:User

  loggedIn=false

  constructor(private userService:UserService,private formbuilder:FormBuilder,private messageService:MessageService, private router:Router , private http:HttpClient) { }

  ngOnInit(): void {
    this.createLoginForm();
    
  }

  createLoginForm(){
    this.loginForm = this.formbuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      })
      if(user){
        localStorage.setItem("token","true")
        this.messageService.add({
                severity: 'success',
                 summary: 'Gİriş Başarılı'
               })
        this.loginForm.reset()
        this.router.navigate(["/products"])

      }else{
        this.messageService.add({
          severity: 'success',
           summary: 'Gİriş Başarısız'
         })
      }
    })
  }

}
