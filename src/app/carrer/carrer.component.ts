import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.scss']
})
export class CarrerComponent implements OnInit {
  jobs: Job []  = jobs;
  constructor() { }

  ngOnInit() {
  }

}
export class Job {
  title : string;
  expirationDate :any;
  person: number;
}
export const jobs = [
  {title : 'IT tieng nhat', expirationDate :'20/3/2019' ,person : 5 },
  {title : 'IT tieng han', expirationDate :'20/3/2019' ,person : 5 },
  {title : 'IT tieng anh', expirationDate :'20/3/2019' ,person : 5 }
]

