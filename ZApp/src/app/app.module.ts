import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import {BaseApiService} from "./services/baseAPI";
import {TweetService} from "./services/api/tweet.service";
import {TweetsComponent} from "./components/tweets/tweets.component";


@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TweetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
