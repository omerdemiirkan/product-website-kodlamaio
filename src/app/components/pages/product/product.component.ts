
import { ProductService } from '../../../services/product.service';
import { Component, OnInit, } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  
})
export class ProductComponent implements OnInit {
  
  products:Product[];
  selectedCategoryId:number=1
  filterText:string="";


  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }

  

  ngOnInit(): void {    
      this.getProductsByCategory();
  }

  getProductsByCategory(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedCategoryId=params['id'];   
    })
    if(this.selectedCategoryId==undefined){
      this.productService.getProducts().subscribe(data => {
        this.products = data;
        console.log(this.products)
      })
    }
    else{
      this.productService.getProductByCategory(this.selectedCategoryId).subscribe(data =>{
        this.products = data
        console.log(this.selectedCategoryId)
      })
    }
    
  }

  selectedProductId(selectedProduct:Product):void{
    window.location.href= `product/${selectedProduct.id}`
}

getProductDelete(val:number){
  if(confirm("Are you sure want to delete?")){
    this.productService.deleteProduct(val).subscribe()
  }
}
  
}
