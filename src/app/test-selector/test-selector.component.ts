import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-selector',
  templateUrl: './test-selector.component.html',
  styleUrls: ['./test-selector.component.css']
})
export class TestSelectorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public openFizzBuzz() {
    this.router.navigate(['fizzbuzz-test']);
  }
  public openEmpire() {
    this.router.navigate(['empire-test']);
  }
  public openNasa() {
    this.router.navigate(['nasa-test']);
  }

}
