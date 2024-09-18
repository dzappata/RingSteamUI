import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {GameComponent} from "./components/game/game.component";
import {PlayComponent} from "./components/play/play.component";
import {FriendComponent} from "./components/friend/friend.component";

//export const routes: Routes = [
 // {path: 'register', component: RegisterComponent},
 // {path: 'login', component: LoginComponent},
 // {path: 'home', component: HomeComponent},  //canActivate: [AuthenticationGuard]
 // {path: 'users', component: UsersComponent},
 // {path: 'games', component: GameComponent},
 // {path: 'users/:id/games', component: PlayComponent},
 // {path: 'users/:id/friends', component: FriendComponent}
//];

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent},
  { path: 'games', component: GameComponent},
  { path: 'users/:id/games', component: PlayComponent},
  { path: 'users/:id/friends', component: FriendComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
