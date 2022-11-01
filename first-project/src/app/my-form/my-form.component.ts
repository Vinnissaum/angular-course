import { Component, OnInit } from '@angular/core';

interface PersonType {
  name: string;
  age: string;
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  person: PersonType = {
    name: 'Vinicius',
    age: '21',
  }

  name: string = '';

  ngOnInit(): void {
  }

}
