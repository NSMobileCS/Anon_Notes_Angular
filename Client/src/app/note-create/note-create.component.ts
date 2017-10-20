import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  note: Note=new Note("","");
  constructor(private _apiservice:ApiService) { }

  ngOnInit() {
  }

  addOnSubmit() {
    this.note.created_at = new Date();
    this._apiservice.createNote(this.note);

    this.note = new Note("", "");

    this._apiservice.fetchNotes();
  }

}
