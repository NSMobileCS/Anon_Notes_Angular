import { Component } from '@angular/core';
import { Note } from './note'
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anon~Notes';
  notes: Note[];
  constructor(private _apiservice:ApiService){
    this.notes = _apiservice.notes();
  }
}
