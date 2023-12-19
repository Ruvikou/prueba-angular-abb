import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() selectedOption: string = '';
  @Output() selectedOptionChange: EventEmitter<string> = new EventEmitter();
  public selecting: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setOption(option: string) {
    this.selectedOption = option;
    this.selectedOptionChange.emit(option);
  }

}
