import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dropdownOptions: string[] = [
    'Custom Dropdown test',
    'Second Dropdown option',
    'Third Dropdown option',
    'Another one',
    'But not less important',
    'The latest option in the dropdown'
  ]

  public selectedOption: string = this.dropdownOptions[0];

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedOption($event: string) {
    this.selectedOption = $event;
  }
}
