import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dropdownOptions: string[] = environment.dropdown_options;
  
  // The first option is selected by default
  public selectedOption: string = this.dropdownOptions[0];

  constructor() { }

  ngOnInit(): void {
  }

  // Updates the selected option when changed and emitted
  setSelectedOption($event: string) {
    this.selectedOption = $event;
  }
}
