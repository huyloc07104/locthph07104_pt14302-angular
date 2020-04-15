import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { ManageComponent } from './manage/manage.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
@NgModule({
  imports:      [ BrowserModule,AppRoutingModule, FormsModule,AngularFontAwesomeModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, HomeComponent, ProductAddComponent, ManageComponent, ProductEditComponent, ProductDetailComponent, ProductListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
