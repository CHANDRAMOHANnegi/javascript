import { NotesServices } from "./note-service.js";
import { NotesView } from "./note-view.js";

const noteService = new NotesServices();

const root = document.getElementById("main");
noteService.getNotes();

const view = new NotesView(root, {
  getNotes: () => noteService.getNotes(),
  getNewNote: () => noteService.getNewNote(),
  updateNotes: (note) => noteService.updateNote(note),
  refreshNotes: () => {},
  addNewNote: () => {
    const note = noteService.getNewNote();
    view.createNoteElement(note);
  },
  removeNote: (note) => {
    const notes = noteService.removeNote(note);
    view.updateNoteList(notes);
  },
});
