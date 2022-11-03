import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }
@Input() value: string = '0';

  @Output() newValue = new EventEmitter();

  plusValue() {
    this.value = (parseInt(this.value) + 1).toString();
    this.newValue.emit({ updatedValue: this.value });
  }

  minusValue() {
    this.value = (parseInt(this.value) - 1).toString();
    this.newValue.emit({ updatedValue: this.value });
  }

  ngOnInit(): void {
  }

}
