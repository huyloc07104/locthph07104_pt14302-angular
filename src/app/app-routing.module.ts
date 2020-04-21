import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductAddComponent } from './product-add/product-add.component';
import { ManageComponent } from './manage/manage.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AdminComponent } from './admin/admin.component';
import { DashbroadComponent } from './dashbroad/dashbroad.component';
const routes: Routes = [
   {path: 'home',component: HomeComponent},
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'admin', component: AdminComponent, 
 children:[
   {path: '', redirectTo: 'dashbroad', pathMatch: 'full'},
   {path: 'dashbroad', component: DashbroadComponent},
   {path: 'product',component: ManageComponent},
   ]
   },
 {path: 'manage',component: ManageComponent},
  {path: 'product',component: ManageComponent},
  {path: 'product-list',component: ProductListComponent},
  {path: 'product-add',component: ProductAddComponent},
      {path: 'product/edit/:productID', component: ProductEditComponent},
         {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
