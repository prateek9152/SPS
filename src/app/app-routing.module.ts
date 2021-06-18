import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { WeddingComponent } from './wedding/wedding.component';
import { CreateWeddingComponent } from './create-wedding/create-wedding.component';
import { ViewComponent } from './view/view.component';
import { ContactComponent } from './contact/contact.component';
import {AboutComponent} from './about/about.component';
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
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'add-user', component: CreateUserComponent },
  { path: 'users-list', component: UsersListComponent },
  {path: 'home', component:HomeComponent, children: [
    {
      path: 'wedding',component:WeddingComponent
    },
  ]

},
  {path: 'wedding', component:WeddingComponent},
  {path: 'create-wedding',component:CreateWeddingComponent},
  {path: 'view',component:ViewComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'engagement',component:EngagementComponent},
  {path:'preweddingshoot',component:PreweddingshootComponent},
  {path:'preweddingfunction',component:PreweddingfunctionComponent},
  {path:'weddings',component:WeddingsComponent},
  {path:'reception',component:ReceptionComponent},
  {path:'kidsportfolio',component:KidsportfolioComponent},
  {path:'birthdayparties',component:BirthdaypartiesComponent},
  {path:'celebration',component:CelebrationComponent},
  {path:'studios',component:StudiosComponent},
  {path:'viewsmorewedding',component:ViewmoreComponent},
  {path:'viewsmoreevents',component:ViewmoreeventsComponent},
  {path:'viewsmorestudiophotos',component:StudiophotosComponent},
  {path:'testimonials',component:TestimonalsComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
