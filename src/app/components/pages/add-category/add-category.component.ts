
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { MessageService } from 'primeng/api';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
 
  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService,private messageService:MessageService) { }

    categoryAddForm:FormGroup
    category:Category=new Category()
    categories:Category[]

  ngOnInit(): void {
    this.createCategoryAddForm();
  }

  createCategoryAddForm(){
    this.categoryAddForm=this.formBuilder.group({
      name:["",Validators.required],
      
    })
  }

  add(){
    if(this.categoryAddForm.valid){
      this.category=Object.assign({},this.categoryAddForm.value)
    }
    this.categoryService.addCategory(this.category).subscribe(data=>{
      console.log(data)        
      this.messageService.add({
        severity: 'success',
        summary: 'Category Successfully Added',
        detail: data.name,
      })
    })
  }
 

}
