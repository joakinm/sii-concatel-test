import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() title: string;
  constructor(private router: Router) { }

  return() {
    this.router.navigate(['../']);
  }

}
