import { Injectable } from '@angular/core';
import { Note } from './note';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {

  private _notes:Note[]=[];

  constructor(private _http: Http) {
    this.fetchNotes();
  }

  fetchNotes(){
    this._http.get('/notes').subscribe( (data) => {
      console.log('inside subscribe call back');
      let api_notes = data.json()['notes'];
      for (var idx=0; idx<api_notes.length; idx++){
        let created_at_string = api_notes[idx].created_at;

        let created_at = new Date(created_at_string);

        let api_note = new Note(api_notes[idx].content, created_at);
        this._notes.push(api_note);
      }
    })
  }

  notes(){
    return this._notes;
  }

  createNote(note:Note){
    console.log('creating note in service');
    this._notes.push(note);
    this._http.post('/notes', note).subscribe( (data) => {
      console.log(data);
    });
  }
}
