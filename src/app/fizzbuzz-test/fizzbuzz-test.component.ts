import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fizzbuzz-test',
  templateUrl: './fizzbuzz-test.component.html'
})
export class FizzbuzzTestComponent {
  @ViewChild("f") form: NgForm;
  public number: number;
  public array = [];
  constructor() { }

  public testFizzbuzz(num: number): Array<string> {
    for (let i = num; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.array.push('fizzbuzz');
      } else if (i % 3 === 0) {
        this.array.push('fizz');
      } else if ( i % 5 === 0 ) {
        this.array.push('buzz');
      } else {
        this.array.push(i);  
      }
    }
    return this.array;
  }
}
