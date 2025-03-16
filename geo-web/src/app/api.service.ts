import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url='http://localhost:5237/api' //test
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(`${this}/student`);
  }
}
