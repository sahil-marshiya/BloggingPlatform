import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items!: any; // Update the type and initialize with an empty array

  constructor(private getBlogService: ServicesService) { }

  ngOnInit(): void {
    this.getBlogService.getData().subscribe(
      (data) => { // Update the type in the subscription
        this.items = data;
      },
      (error) => {
        console.log("Error occurred");
      }
    );
  }
}
