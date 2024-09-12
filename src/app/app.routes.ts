import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {GameComponent} from "./game/game.component";
import {PlayComponent} from "./play/play.component";
import {FriendComponent} from "./friend/friend.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'games', component: GameComponent},
  {path: 'users/:id/games', component: PlayComponent},
  {path: 'users/:id/friends', component: FriendComponent},
  {path: '', component: HomeComponent}
];
