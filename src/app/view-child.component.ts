import {
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
  AfterViewInit,
  ViewChild,
  QueryList,
} from '@angular/core';
import { ChildViewsComponent } from './child-views.component';

@Component({
  selector: 'app-view-child',
  template: `
  <!--<h1 #myTag>Heello View children1</h1>
  <h1 #myTag>Heello View children2</h1>
  <h1 #myTag>Heello View children3</h1>-->
  <br>
  <br>
  <br>
  <button (click)="inc()"> Increment the Count</button> <br>
  <button (click)="dec()"> Decrement the Count</button>
  <app-child-views #myChildTag></app-child-views>

  `,
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  // const ele: any = document.getElementById('myTag');
  // @ViewChild('myTag') htmlTag: ElementRef;
  // @ViewChildren('myTag') htmlTag: QueryList<any>;
  @ViewChild('myChildTag') myChildTag: ChildViewsComponent;
  constructor() {}

  public ngOnInit() {}

  public ngAfterViewInit() {
    console.log('myChildTag', this.myChildTag);
    // console.log('View INIT EMELEM', this.htmlTag);
    // this.htmlTag.nativeElement.style.color = 'red'
    // this.htmlTag.results
    // this.htmlTag.first.foreach((ele: ElementRef)=> {
    // })
    // this.htmlTag.last.nativeElement.style.color ='green'
  }


  public inc(): void {
    this.myChildTag.increment();
  }

  public dec(): void {
    this.myChildTag.decrement();

    
  }
}
