import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangmanGameComponent } from './hangman-game/hangman-game.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'hangman', component: HangmanGameComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
