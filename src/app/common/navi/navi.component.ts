import { LoginComponent } from './../../components/pages/login/login.component';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  items: MenuItem[];

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Anasayfa', icon: 'pi pi-fw pi-home' ,routerLink:['/products']},
      {label: 'Ürünler', icon: 'pi pi-fw pi-pencil',routerLink:['products']},
      {label: 'Kategori Ekle', icon: 'pi pi-fw pi-pencil',routerLink:['product/addCategory']},
      {label: 'Ürün Ekle', icon: 'pi pi-fw pi-pencil',routerLink:['product/addProduct']},
      {label: 'Kayıt Ol', icon: 'pi pi-fw pi-user-plus',routerLink:['users/addUser']},
     
  
  ];
  }

}
