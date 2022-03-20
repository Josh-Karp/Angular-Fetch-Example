import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private FIREBASE_FUNCTION = "https://us-central1-sports-app-4dc0f.cloudfunctions.net/getSchedule";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get(this.FIREBASE_FUNCTION);
  }
}