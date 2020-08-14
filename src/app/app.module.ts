import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StickyNavModule,
    SlickCarouselModule,
    NgImageSliderModule,
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
