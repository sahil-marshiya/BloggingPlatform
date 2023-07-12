import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  url = "http://localhost:3000/blogs";

  sendData(data: any) {
    return this.http.post<any>(this.url, data);
  }

  getData() {
    return this.http.get<any[]>(this.url);
  }

  getDataById(id: any) {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  updateData(id: any, data: any) {
    return this.http.put<any>(`${this.url}/${id}`, data);
  }
  deleteData(id: any) {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
