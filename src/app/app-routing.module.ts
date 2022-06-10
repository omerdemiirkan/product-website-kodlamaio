import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { ProductComponent } from './components/pages/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/pages/add-category/add-category.component';
import { UpdateProductComponent } from './components/pages/update-product/update-product.component';
import { AddUserComponent } from './components/pages/add-user/add-user.component';
import { LoginComponent } from './components/pages/login/login.component';
 

const routes: Routes = [
  {path:"", pathMatch: "full" , component:AddUserComponent ,},
  {path:"product/categoryId/:id" , component:ProductComponent },
  {path:"products" , component:ProductComponent, },
  {path:"product/addProduct" ,component:AddProductComponent ,canActivate:[AuthGuard] },
  {path:"product/addCategory" ,component:AddCategoryComponent ,canActivate:[AuthGuard]},
  {path:"products/:id" ,component: UpdateProductComponent },
  {path:"users/login" ,component: LoginComponent },
  {path:"users/addUser" ,component: AddUserComponent ,  },  
  {path:"**" ,component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
