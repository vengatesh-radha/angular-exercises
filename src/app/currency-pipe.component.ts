import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  template: `<p> My Salary {{sal | currency: 'EUR': 'symbol-narrow': '1.3'}}</p>
  <p> My Salary {{sal | currency: 'EUR': 'symbol'}}</p>`,
})
export class CurrentPipeImpComponent {
  sal: number = 25000;
  constructor() {}
}
