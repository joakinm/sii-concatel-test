import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empire-test',
  templateUrl: './empire-test.component.html',
  providers: [DatePipe]
})

export class EmpireTestComponent {
  @ViewChild("f") form: NgForm;
  public planet: string;
  public rebel: string;
  public rebelsRecorded = new Array<{rebelName: string, planetName: string, registerDate: Date}>();

  constructor(private datePipe: DatePipe) { }

  public testEmpireRegister() {
    const rebelExisting = this.searchRebels();
    if (rebelExisting) {
      alert(`the rebel ${rebelExisting.rebelName} from planet ${rebelExisting.planetName} was added on ${this.datePipe.transform(rebelExisting.registerDate) }`);
    } else {
      this.rebelsRecorded.push({rebelName: this.rebel, planetName: this.planet, registerDate: new Date()});
      this.resetForm();
    }
  }

  public searchRebels() {
    return this.rebelsRecorded.find(reb => {
      return (reb.rebelName === this.rebel && reb.planetName === this.planet)
    }); 
  }

  public resetForm() {
    this.rebel = '';
    this.planet = '';
  }
}
