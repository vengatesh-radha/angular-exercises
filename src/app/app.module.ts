import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user.component';
import { UserPipe } from './user.pipe';
import { UserNavigationDirective } from './user.directive';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiHttpInterceptor } from '../services/http-interceptor';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    UserPipe,
    UserNavigationDirective,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
