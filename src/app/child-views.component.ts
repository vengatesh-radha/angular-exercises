import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-views',
  template: `<p>Total Count *** {{count}}</p>`,
})
export class ChildViewsComponent implements OnInit {
  count:number = 0;
  constructor() {}

  public ngOnInit() {}

  public increment(): void {
    this.count++;

  }
  public decrement(): void {
    this.count--;

  }
}
