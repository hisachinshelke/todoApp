import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Notes } from './modals/notes.modal';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notes: Notes[] = [];
  private note: Notes;
  constructor(private storage: Storage) { }


  saveNotes(note: Notes) {
    note.createdDate = Date.now();
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }

  getNotes() {
    return this.storage.get('notes').then(
      (storedNotes) => {
        if (storedNotes) {
          this.notes = storedNotes;
          return [...this.notes];
        }
        return [];
      }
    )
  }

  getNote(createdDate: number) {
    return this.storage.get('notes').then((notes) => {
      this.note = [...notes].find(r => r.createdDate === createdDate)
      return this.note;
    })
  }

  deleteNote(createdDate: number) {
    this.notes = this.notes.filter((notes) => {
      return notes.createdDate != createdDate;
    });
    this.storage.set('notes', this.notes);
  }
}
