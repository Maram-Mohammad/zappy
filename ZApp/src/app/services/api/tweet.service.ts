import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {BaseApiService} from "../baseAPI";
import {Tweet} from "../../models/tweet";


@Injectable()
export class TweetService extends BaseApiService<Tweet> {

  constructor(http: HttpClient) {
    super(http);
    this.url = '/tweets';
  }

}


