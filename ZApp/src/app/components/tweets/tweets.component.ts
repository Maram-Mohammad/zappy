import { Component, OnInit, OnDestroy } from '@angular/core';
import {Tweet} from "../../models/tweet";
import {TweetService} from "../../services/api/tweet.service";

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets:any;
  contentRefresher: any;

  constructor(private api: TweetService) {}
  ngOnInit() {
    this.getTweets();
    this.refreshData();
  }

  getTweets(){
    this.api.getAll().subscribe((data)=>{
      this.tweets=data;
    })
  }
  refreshData(){
    this.contentRefresher =
      setInterval(() => {
        this.getTweets();
      }, 30000);
  }
  cancelPageRefresh(){
    if(this.contentRefresher){
      clearInterval(this.contentRefresher);
    }
  }

  ngOnDestroy(){
    this.cancelPageRefresh();
  }



}
