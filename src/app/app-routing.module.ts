import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoverMailComponent } from './recover-mail/recover-mail.component';
import { RegisterComponent } from './register/register.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UserValidComponent } from './user-valid/user-valid.component';
import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'index' ,component:IndexComponent},
  {path:'about' ,component:AboutComponent},
  {path:'products' ,component:ProductsComponent},
  {path:'new' ,component:NewComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'cart' ,component:CartComponent},
  {path:'checkout' ,component:CheckoutComponent},
  {path:'favorite' ,component:FavoriteComponent},
  {path:'forget-password' ,component:ForgetPasswordComponent},
  {path:'login' ,component:LoginComponent},
  {path:'profile' ,component:ProfileComponent},
  {path:'recover-mail' ,component:RecoverMailComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'single-product' ,component:SingleProductComponent},
  {path:'user-valid' ,component:UserValidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
