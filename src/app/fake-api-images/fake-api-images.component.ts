import { Component } from '@angular/core';
import { ApiImagesService } from '../api-images.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fake-api-images',
  standalone: true,
  imports: [CommonModule  , HttpClientModule],
  templateUrl: './fake-api-images.component.html',
  styleUrl: './fake-api-images.component.css',
  providers:[ApiImagesService]
})
export class FakeApiImagesComponent {

  public apidata : any;

  constructor(private servicepage : ApiImagesService){}

  ngOnInit(){
    this.servicepage.getdata().subscribe(data =>{
      this.apidata = data;
    })
  }

}
