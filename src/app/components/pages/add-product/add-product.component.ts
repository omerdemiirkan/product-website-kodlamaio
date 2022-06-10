import { MessageService } from 'primeng/api';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productAddForm:FormGroup
  product:Product=new Product()
  categories:Category[]

  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService
    , private productService:ProductService, private messageService:MessageService ) { }

  ngOnInit(): void {
    this.createProductAddForm();    
    this.getCategory();
  }

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      categoryId:["",Validators.required],
      name:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required]
    })
  }

  getCategory(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
  add(){
    if(this.productAddForm.valid){
      this.product=Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      this.messageService.add({
        severity: 'success',
        summary: 'Product Successfully Added',
        detail: data.name,
      })
    })
    window.location.href="/products"
  }


 

}
