import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inbox } from './inbox';

const ApiUrl = 'https://server-crud.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(
    private http: HttpClient
  ) { }

  getAllMsg() {
    return this.http.get<Inbox>(`${ApiUrl}/messages`);
  }

  getMsg(id) {
    return this.http.get<Inbox>(`${ApiUrl}/messages/${id}`);
  }
}
