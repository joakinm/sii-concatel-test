import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empire-test',
  templateUrl: './empire-test.component.html',
  styleUrls: ['./empire-test.component.css']
})
export class EmpireTestComponent implements OnInit {
  @ViewChild("f") form: NgForm;
  public planet: string;
  public rebel: string;
  public rebelsRecorded = new Array<{rebelName: string, planetName: string, registerDate: Date}>();

  constructor() { }

  ngOnInit(): void {
  }

  public testEmpireRegister() {
    this.rebelsRecorded.push({rebelName: this.rebel, planetName: this.planet, registerDate: new Date()});
  }
}
