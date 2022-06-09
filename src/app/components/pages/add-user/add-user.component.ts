import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userAddForm:FormGroup
  user:User=new User()

  constructor(private formBuilder:FormBuilder,private userService:UserService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.userAddForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  addUser(){
    if(this.userAddForm.valid){
      this.user=Object.assign({},this.userAddForm.value)
    }
    this.userService.addUser(this.user).subscribe(data=>{
      this.messageService.add({
        severity: 'success',
        summary: 'Product Successfully Added',
        detail: data.firstName + " " +data.lastName,
      })
      window.location.href="/users/login"
    })
  }


}
