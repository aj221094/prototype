import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReadFileService {

  constructor(private http:HttpClient) { }

  data:any;

    readRequest(fileUrl:string):any{
    return this.http.get(fileUrl, {responseType: 'text'})
  }
}
