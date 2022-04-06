import {Component, OnInit} from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector:'app-user',
  template:`<p>hello user</p>`
})

export class UserComponent implements OnInit{
  constructor( private activatedroute:ActivatedRoute){}

public ngOnInit(){
 console.log(this.activatedroute.snapshot.params)
}
   
}