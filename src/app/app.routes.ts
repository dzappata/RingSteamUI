import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {GameComponent} from "./game/game.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'games', component: GameComponent},
  {path: '', component: HomeComponent}
];
