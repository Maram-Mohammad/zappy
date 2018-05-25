import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {BaseModel} from "../models/base-model";


export class BaseApiService<T extends BaseModel> {
    public baseUrl = 'http://localhost:3100';
    public url = "/";


    constructor(private http: HttpClient) {
    }
  protected setReqHeader(): HttpHeaders {
      return new HttpHeaders()
        .set("Content-Type", "application/json")
  }

    get(id: string) {
        return this.http.get<T>(this.baseUrl + this.url + '/'+ id, {headers: this.setReqHeader()})
    }

    getAll() {
      return this.http.get<T>(this.baseUrl + this.url)
    }

    add(item: T) {
        return this.http.post<T>(this.baseUrl + this.url, item, {headers: this.setReqHeader()})
    }
}
