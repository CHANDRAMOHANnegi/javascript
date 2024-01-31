import { NotesServices } from "./note-service.js";
import { NotesView } from "./note-view.js";

class NoteController {
  constructor(root) {

    this.root = root
    this.view = new NotesView(root)
  }

  getNotes() {
   return NotesServices.getNotes()
  }

  getNewNote() { NotesServices.getNewNote() }

  updateNotes(note) { NotesServices.updateNote(note) }

  refreshNotes() {

  }
  addNewNote() {
    const note = NotesServices.getNewNote();
    view.createNoteElement(note);
  }
  removeNote(note) {
    const notes = NotesServices.removeNote(note);
    view.updateNoteList(notes);
  },
}

// const NotesServices = new NotesServices();

// const root = document.getElementById("main");
// NotesServices.getNotes();

// const view = new NotesView(root, {

// });
