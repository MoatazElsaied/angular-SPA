import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './new/new.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RecoverMailComponent } from './recover-mail/recover-mail.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UserValidComponent } from './user-valid/user-valid.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    NewComponent,
    ContactComponent,
    ProfileComponent,
    CartComponent,
    SingleProductComponent,
    FavoriteComponent,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    RecoverMailComponent,
    ForgetPasswordComponent,
    UserValidComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
