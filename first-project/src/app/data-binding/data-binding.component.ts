import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://loaine.training';
  urlImage: string = 'https://cdn.pixabay.com/photo/2016/02/17/15/37/laptop-1205256_960_720.jpg'

  inputText: string = '';
  savedInput: string = '';
  isMouseOver: boolean = false;
  varName: string = 'via component props';
  initialCounterValue: number = 10;

  constructor() { }

  getFifty(): number {
    return 50;
  }

  handleButtonClick() {
    alert('Button clicked');
  }

  onKeyUp(event: KeyboardEvent) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  saveInputText(value: string) {
    this.savedInput = value;
  }

  onMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValueChange(event: string) {
    console.log(event);
  }

  ngOnInit(): void {}
}
