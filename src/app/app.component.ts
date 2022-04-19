import { Component, VERSION, OnInit } from '@angular/core';
import { PostService, User } from '../services/post.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  users: User[] = [];
  login: FormGroup;
  constructor(
    private postservice: PostService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.login = this.formbuilder.group({
      email: ['', Validators.required],
    });
    this.getUser();
  }

  public getUser() {
    this.postservice.getUserData().subscribe(
      (res: User[]) => {
        this.users = res;
        console.log(this.users);
      },
      (err) => {
        
      }
    );
  }

  public getData(user) {
    console.log('aAAAA', user);
    this.router.navigateByUrl(`user/${user.id}`);
  }

  public submitlogin() {
    console.log(this.login);
  }
}

