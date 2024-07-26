import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiImagesService {

  private api = 'https://fakestoreapi.com/products';

  constructor(private xyz : HttpClient) { }

  getdata(){
    return this.xyz.get(this.api);
  }
}
