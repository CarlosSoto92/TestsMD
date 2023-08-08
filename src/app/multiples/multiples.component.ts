
import { Component } from '@angular/core';

@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.scss']
})
export class MultiplesComponent {
  userInput: number;
  multiplesList: { number: number, color: string }[] = [];

  constructor() {}

  findMultiples() {
    this.multiplesList = [];
    for (let i = 1; i <= this.userInput; i++) {
      const color = this.getMultiplesColor(i);
      this.multiplesList.push({ number: i, color });
    }
  }

  getMultiplesColor(number: number): string {
    if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
      return 'purple';
    } else if (number % 3 === 0) {
      return 'green';
    } else if (number % 5 === 0) {
      return 'red';
    } else if (number % 7 === 0) {
      return 'blue';
    } else {
      return 'black';
    }
  }
}
