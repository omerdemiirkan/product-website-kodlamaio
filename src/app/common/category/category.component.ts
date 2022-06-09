import { AccountService } from './../../services/account.service';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categories: Category[];
  selectedCategory: Category;
  categoryfilterText:string=""
  
  constructor( private categoryService:CategoryService,private accountService:AccountService, private router:Router) {}


  ngOnInit(): void {
    this.getCategoryNames();    
  }

  getCategoryNames(){
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data
    })    
  }

  selectedCategoryId():void{
      window.location.href= `product/categoryId/${this.selectedCategory.id}`
  }
  isloggedIn(): boolean{
    return this.accountService.isLoggedIn()
  }
  logOut(){
    this.accountService.logOut()
  }


}
