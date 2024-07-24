import { Component } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fake-api-data',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './fake-api-data.component.html',
  styleUrl: './fake-api-data.component.css',
  providers:[UserdataService]
})
export class FakeApiDataComponent {

  public users : any;

  constructor (private servicepage : UserdataService){}

  ngOnInit(){
    this.servicepage.getdata().subscribe(xyz => {
      this.users = xyz;
    }
    )
  }
}
