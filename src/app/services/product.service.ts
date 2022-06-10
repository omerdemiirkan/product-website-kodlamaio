import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "http://localhost:3000/products"

  constructor( private httpClient:HttpClient) { }


  getProductByCategory(catId:number):Observable<Product[]>{
    let newPath = this.apiUrl + ("?categoryId=" + catId)
    return this.httpClient.get<Product[]>(newPath)
  }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiUrl)
  }

  addProduct(product:Product):Observable<Product>{
    
    return this.httpClient.post<Product>("http://localhost:3000/products",product)

  }

  getProductById(proId:number):Observable<Product>{
    let newPath = this.apiUrl +"/"+ (proId)
    return this.httpClient.get<Product>(newPath)
  }

  updateProduct(product:Product):Observable<Product>{
    return this.httpClient.put<Product>("http://localhost:3000/products/"+product.id,product)
  }

  deleteProduct(val:number):Observable<Product[]>{
    return this.httpClient.delete<Product[]>("http://localhost:3000/products/"+val)
  }


}
