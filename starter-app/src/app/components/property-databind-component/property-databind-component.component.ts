import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-databind-component',
  templateUrl: './property-databind-component.component.html',
  styleUrls: ['./property-databind-component.component.css']
})
export class PropertyDatabindComponentComponent implements OnInit {


  female = {
    name: 'Turanga Leela',
    sex: 'f',
    rating: 4,
    photo: 'assets/images/leela.jpg'
  };

  male = {
    name: 'Philip J. Fry',
    sex: 'm',
    photo: 'assets/images/fry.jpg'
  };
  
  person: any = this.female;

  constructor() { }

  ngOnInit() {
  }

}
