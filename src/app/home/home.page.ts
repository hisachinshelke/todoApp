import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { Notes } from '../modals/notes.modal';
import { NavController } from '@ionic/angular';
import { ViewNotesPage } from '../view-notes/view-notes.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public notes: Promise<Notes[]>;
  public note: Notes;
  constructor(private router: Router, private noteService: NotesService, private navCtrl: NavController) { }

  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  getAllNotes() {
    return this.noteService.getNotes();
  }

  addNote() {
    this.router.navigate(['/add-notes']);
  }

  getNote(createdDate: number) {
    this.noteService.getNote(createdDate).then((noteReceived) => {
      this.note = noteReceived;
      console.log(this.note);

      this.router.navigate(['/view-notes',
        {
          title: this.note.title,
          date: this.note.date,
          content: this.note.content,
          createdDate: this.note.createdDate
        }
      ]);
    })
  }
}
