import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsertableComponent } from './components/usertable/usertable.component';
import {UserService} from './services/user.service';
import 'hammerjs';
import { HttpModule, Headers, Response } from '@angular/http';
import { MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,MatTableModule,MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule} from '@angular/material';
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
  ],
  imports: [
    BrowserModule,  MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,MatTableModule,MatPaginatorModule,HttpModule,
    MatSortModule,
    MatProgressSpinnerModule, BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
