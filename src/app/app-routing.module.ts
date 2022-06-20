import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WildfitComponent } from './components/wildfit/wildfit.component';
import { MyStoryComponent } from './components/my-story/my-story.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'myStory',component:MyStoryComponent},
  {path:'home',component:HomeComponent},
  {path:'wildfit',component:WildfitComponent },
  {path:'shop',component:ShopComponent},
  {path:'cart',component:CartComponent},
  {path:'contact',component:ContactComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
