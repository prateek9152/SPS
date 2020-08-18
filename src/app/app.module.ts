import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';

import { AppRoutingModule } from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {WeddingComponent} from './wedding/wedding.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { CreateWeddingComponent } from './create-wedding/create-wedding.component';
import { ViewComponent } from './view/view.component';
import { NguiInViewComponent } from './ngui-in-view.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import { NgImageSliderModule } from 'ng-image-slider';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { TabModule } from 'angular-tabs-component';
import { TabsModule } from 'ngx-bootstrap/tabs';



@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersListComponent,
    HomeComponent,
    WeddingComponent,
    CreateWeddingComponent,
    ViewComponent,
    NguiInViewComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StickyNavModule,
    SlickCarouselModule,
    // CarouselModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    TabModule,
    TabsModule.forRoot()
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule { }
