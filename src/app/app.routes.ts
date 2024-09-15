import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsersComponent} from "./components/users/users.component";
import {GameComponent} from "./components/game/game.component";
import {PlayComponent} from "./components/play/play.component";
import {FriendComponent} from "./components/friend/friend.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'games', component: GameComponent},
  {path: 'users/:id/games', component: PlayComponent},
  {path: 'users/:id/friends', component: FriendComponent}
];
