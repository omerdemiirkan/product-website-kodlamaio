import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {ListboxModule} from 'primeng/listbox';
import { CategoryComponent } from './common/category/category.component';
import { ProductComponent } from './components/pages/product/product.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import {InputTextModule} from 'primeng/inputtext';
import { VatPipe } from './pipes/vat.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FiltercatPipe } from './pipes/filtercat.pipe';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { AddCategoryComponent } from './components/pages/add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import { UpdateProductComponent } from './components/pages/update-product/update-product.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddUserComponent } from './components/pages/add-user/add-user.component';
import { LoginComponent } from './components/pages/login/login.component'



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CategoryComponent,
    ProductComponent,
    NotFoundComponent,
    VatPipe,
    FilterPipe,
    FiltercatPipe,
    AddProductComponent,
    AddCategoryComponent,
    UpdateProductComponent,
    AddUserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    ListboxModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    MultiSelectModule,
    ToastModule,
    BrowserAnimationsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
