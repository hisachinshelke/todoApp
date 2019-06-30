import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Notes } from '../modals/notes.modal';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.page.html',
  styleUrls: ['./add-notes.page.scss'],
})
export class AddNotesPage implements OnInit {
 
  constructor(private noteService: NotesService, private router: Router) {
  }

  saveNote(note: Notes) {
    console.log(note);

    this.noteService.saveNotes(note);
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
