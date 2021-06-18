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
import { AboutComponent } from './about/about.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselComponent } from './carousel/carousel.component';
import { EngagementComponent } from './engagement/engagement.component';
import { PreweddingshootComponent } from './preweddingshoot/preweddingshoot.component';
import { PreweddingfunctionComponent } from './preweddingfunction/preweddingfunction.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ReceptionComponent } from './reception/reception.component';
import { KidsportfolioComponent } from './kidsportfolio/kidsportfolio.component';
import { BirthdaypartiesComponent } from './birthdayparties/birthdayparties.component';
import { CelebrationComponent } from './celebration/celebration.component';
import { StudiosComponent } from './studios/studios.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { ViewmoreeventsComponent } from './viewmoreevents/viewmoreevents.component';
import { StudiophotosComponent } from './studiophotos/studiophotos.component';

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
    AboutComponent,
    CarouselComponent,
    EngagementComponent,
    PreweddingshootComponent,
    PreweddingfunctionComponent,
    WeddingsComponent,
    ReceptionComponent,
    KidsportfolioComponent,
    BirthdaypartiesComponent,
    CelebrationComponent,
    StudiosComponent,
    TestimonalsComponent,
    ViewmoreComponent,
    ViewmoreeventsComponent,
    StudiophotosComponent,
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
    NgbModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule { }
