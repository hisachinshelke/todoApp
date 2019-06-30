import { Component, OnInit } from '@angular/core';
import { Notes } from '../modals/notes.modal';
import { NotesService } from '../notes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.page.html',
  styleUrls: ['./view-notes.page.scss'],
})
export class ViewNotesPage implements OnInit {
  // note: Notes;
  title: string;
  date: string;
  content: string;
  createdDate: string;
  constructor(private noteService: NotesService, private router: Router, private actRouter: ActivatedRoute) {

    this.title = this.actRouter.snapshot.paramMap.get('title');
    this.content = this.actRouter.snapshot.paramMap.get('content');
    this.date = this.actRouter.snapshot.paramMap.get('date');
    this.createdDate = this.actRouter.snapshot.paramMap.get('createdDate');
    console.log(this.title, this.content, this.date, this.createdDate);

  }

  deleteNote() {
    this.noteService.deleteNote(+this.createdDate);
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
