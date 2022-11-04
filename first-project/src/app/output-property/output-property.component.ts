import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }
  @Input() value: number = 0;

  @ViewChild('inputField', { static: false }) inputValue!: ElementRef;

  @Output() newValue = new EventEmitter();

  plusValue() {
    this.inputValue.nativeElement.value++;
    // this.value = (parseInt(this.value) + 1).toString();
    this.newValue.emit({ updatedValue: this.value });
  }

  minusValue() {
    this.inputValue.nativeElement.value--;
    // this.value = (parseInt(this.value) - 1).toString();
    this.newValue.emit({ updatedValue: this.value });
  }

  ngOnInit(): void {
  }

}
