const getRndmId = () => parseInt(Math.random() * 10000000);

// type INote = {
//   id: number;
//   title: string;
//   text: string;
// };

const key = "sticky-notes";

export class NotesServices {
  #notes = [];

  // get
  getNotes() {
    const data = localStorage.getItem(key);
    // console.log(data, typeof data, data === null);
    const notes = (data && JSON.parse(data)) || [];
    this.#notes = notes;
    console.log(this.#notes);
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

    // console.log(alreadyExist);
    if (alreadyExist) {
      alreadyExist.text = note.text;
    } else {
      const id = getRndmId();
      note.id = id;
      this.#notes.push(note);
    }

    localStorage.setItem(key, JSON.stringify(this.#notes));
    return this.#notes;
  }

  // delete
  removeNote(note) {
    const newNotes = this.#notes.filter((not) => not.id !== note.id);
    this.#notes = newNotes;
    localStorage.setItem(key, JSON.stringify(this.#notes));
    return newNotes;
  }
}
