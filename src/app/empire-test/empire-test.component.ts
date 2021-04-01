import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-empire-test',
  templateUrl: './empire-test.component.html',
  styleUrls: ['./empire-test.component.css'],
  providers: [DatePipe]
})
export class EmpireTestComponent implements OnInit {
  @ViewChild("f") form: NgForm;
  public planet: string;
  public rebel: string;
  public rebelsRecorded = new Array<{rebelName: string, planetName: string, registerDate: Date}>();

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  public testEmpireRegister() {
    const rebelExisting = this.rebelsRecorded.find(reb => {
      return (reb.rebelName === this.rebel && reb.planetName === this.planet)
    }); 
    if (rebelExisting) {
      alert(`the rebel ${rebelExisting.rebelName} from planet ${rebelExisting.planetName} was added on ${this.datePipe.transform(rebelExisting.registerDate) }`);
    } else {
      this.rebelsRecorded.push({rebelName: this.rebel, planetName: this.planet, registerDate: new Date()});
      this.planet = '';
      this.rebel = '';
    }
  }
}
