import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface users{
  id : number;
  name : string;
  email : string;
}


@Injectable({
  providedIn: 'root'
})


export class UserdataService {

  constructor(private abc : HttpClient) { }

  private apiurl = 'https://jsonplaceholder.typicode.com/users';


  getdata(){
    return this.abc.get<users[]>(this.apiurl);
  }
}

