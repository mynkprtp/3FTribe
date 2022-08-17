import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WildfitComponent } from './components/wildfit/wildfit.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewHeaderComponent } from './components/shared/new-header/new-header.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { MyStoryComponent } from './components/my-story/my-story.component';
import { environment } from 'environments/environment';
import { CartComponent } from './components/shop/cart/cart.component';
import { Wildfit90Component } from './components/wildfit/wildfit90/wildfit90.component';
import { SuccessComponent } from './components/shop/success/success.component';
import { FailureComponent } from './components/shop/failure/failure.component';
import { StripeComponent } from './components/shop/stripe/stripe.component';
import { FaqComponent } from './components/wildfit/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WildfitComponent,
    ContactComponent,
    ShopComponent,
    TestimonialsComponent,
    NewHeaderComponent,
    HowItWorksComponent,
    MyStoryComponent,
    CartComponent,
    Wildfit90Component,
    SuccessComponent,
    FailureComponent,
    StripeComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYoutubePlayerModule.forRoot(),
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
