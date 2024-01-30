const getRndmId = () => parseInt(Math.random() * 10000000);

// type INote = {
//   id: number;
//   title: string;
//   text: string;
// };

export class NotesServices {
  #notes = [];

  // get
  getNotes() {
    return this.#notes;
  }

  getNewNote() {
    const id = getRndmId();
    const note = {
      id,
      title: id,
      text: "",
    };
    this.#notes.push(note);
    return note;
  }

  // put
  updateNote(note) {
    const alreadyExist = this.#notes.find((not) => not.id === note.id);

    if (alreadyExist) {
      alreadyExist.text = note.text;
    } else {
      const id = getRndmId();
      note.id = id;
      this.#notes.push(note);
    }

    return this.#notes;
  }

  // delete
  removeNote(note) {
    const newNotes = this.#notes.filter((not) => not.id !== note.id);
    this.#notes = newNotes;
  }
}
