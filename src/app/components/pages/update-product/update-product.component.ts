import { MessageService } from 'primeng/api';
import { CategoryService } from './../../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product:Product=new Product()
  selectedProductId:number
  categories: Category[];
  productUpdateForm:FormGroup
  


  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute
    ,private formBuilder:FormBuilder,private categoryService:CategoryService,private messageService:MessageService) { }
    
   
    updateProductAddForm(){
      this.productUpdateForm=this.formBuilder.group({
        id:[this.product.id,Validators.required],
        name:[this.product.name,Validators.required],
        unitPrice:[this.product.unitPrice,Validators.required],
        unitsInStock:[this.product.unitsInStock,Validators.required],        
        categoryId:[this.product.categoryId,Validators.required]
      })
    }

  ngOnInit(): void {
    this.updateProductAddForm()
    this.getCategory()
    this.getProductsById()
  
  }

  getProductsById(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedProductId=params['id'];   
    })    
      this.productService.getProductById(this.selectedProductId).subscribe(data =>{
        this.product = data
        this.updateProductAddForm();
      })        
  }
 
  getCategory(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }
  update(){
    if(this.productUpdateForm.valid){
      this.product=Object.assign({},this.productUpdateForm.value)
    }
    this.productService.updateProduct(this.product).subscribe(data=>{
      this.messageService.add({
        severity: 'success',
        summary: 'Product Successfully Updated',
        detail: data.name
      })
    })
  }

}
