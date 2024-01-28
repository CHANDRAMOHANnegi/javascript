export const NotesView = class {
  root = null;
  constructor(root, handlers) {
    this.root = root;
    this.handlers = handlers;

    const listItem = `
    <div id="notes-list"></div>
    `;

    const plusHtml = `
        <div class="add-note note-item" id="add-button">
            <div class="plus">
                +
            </div>
        </div>
    `;

    this.root.innerHTML = listItem + plusHtml;
    // this.root.appendChild(plusHtml);
    // this.root.appendChild(listItem);
    // this.root.innerHTML = plusHtml;
    const btnAddNote = this.root.querySelector("#add-button");

    btnAddNote.addEventListener("click", () => {
      // console.log("click");
      this.handlers.addNewNote();
    });

    const notes = this.handlers.getNotes();

    notes.forEach((not) => {
      this.createNoteElement(not);
    });
  }

  createNoteElement(note) {
    console.log(note);
    const id = `text-${note.id}`;

    const ele = `
        <div class="note note-item">
            <div id=${id}-title>${note.title}</div>
            <textarea placeholder="Enter note" cols="20" rows="10" id=${id}>${note.text}</textarea>
        </div> 
    `;
    const listItem = this.root.querySelector("#notes-list");
    /**
     * !insertBefore won't work because it do not work for html-string
     *
     * https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
     * **/

    // listItem.insertBefore(ele, listItem.firstElementChild);

    listItem.insertAdjacentHTML("afterBegin", ele);

    const textInput = this.root.querySelector(`#${id}`);
    const titleBtn = this.root.querySelector(`#${id}-title`);

    // console.log(textInput);
    titleBtn.addEventListener("dblclick", () => {
      this.handlers.removeNote(note);
    });

    textInput.addEventListener("blur", (e) => {
      note.text = e.target.value;
      this.handlers.updateNotes(note);
    });
  }

  updateNoteList(notes) {
    const notesListContainer = this.root.querySelector("#notes-list");

    console.log(notesListContainer);
    // Empty list
    notesListContainer.innerHTML = "";

    for (const note of notes) {
      const html = this.createNoteElement(note);

      notesListContainer.insertAdjacentHTML("beforeend", html);
    }

    // Add select/delete events for each list item
    notesListContainer
      .querySelectorAll(".note-item")
      .forEach((noteListItem, i) => {
        if (i < notes.length) {
          console.log(noteListItem.children);
          // const third = document.querySelector("#parent :nth-child(1)");

          // noteListItem.addEventListener("click", () => {
          //   // this.onNoteSelect(noteListItem.dataset.noteId);
          // });

          // noteListItem.addEventListener("dblclick", () => {
          //   const doDelete = confirm(
          //     "Are you sure you want to delete this note?"
          //   );

          //   if (doDelete) {
          //     this.onNoteDelete(noteListItem.dataset.noteId);
          //   }
          // });
        }
      });
  }
};
