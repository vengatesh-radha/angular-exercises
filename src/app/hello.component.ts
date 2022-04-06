import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';


@Component({
  selector: 'hello',
  template: `<div *ngFor="let user of users">
  <a navigation (click)="callnumber(user)"> {{user.id|serialnumberpipe}} </a>
  <p> {{user.site_admin}}</p>   
 </div>`,
  styles: [`h1 { font-family: Lato; } a{ color:red}`],
})
export class HelloComponent implements OnInit {
  @Input() users: any;
  @Output() sendData: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log(this.users);
  }

  public callnumber(user) {
    this.sendData.emit(user);
  }
}
