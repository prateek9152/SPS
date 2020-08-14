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

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'add-user', component: CreateUserComponent },
  { path: 'users-list', component: UsersListComponent },
  {path: 'home', component:HomeComponent},
  {path: 'wedding', component:WeddingComponent},
  {path: 'create-wedding',component:CreateWeddingComponent},
  {path: 'view',component:ViewComponent},
  {path:'contact',component:ContactComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
