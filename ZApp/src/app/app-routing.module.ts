import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TweetsComponent} from "./components/tweets/tweets.component";



const routes: Routes = [
  {path: '', component: TweetsComponent},
  {path: 'tweets', component: TweetsComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule {
}
