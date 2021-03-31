import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nasa-test',
  templateUrl: './nasa-test.component.html',
  styleUrls: ['./nasa-test.component.css']
})
export class NasaTestComponent implements OnInit {
  @ViewChild("f") form: NgForm;
  public number: number;
  public count: number;
  constructor() { }

  ngOnInit(): void {
  }
  public testNasa() {
    this.count = this.number;
    let intervalId = setInterval(() => {
      this.count = this.count - 1;
        if(this.count === 0) {clearInterval(intervalId)}
    }, 1000)
  }
}
  