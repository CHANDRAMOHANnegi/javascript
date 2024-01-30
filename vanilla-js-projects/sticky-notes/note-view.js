export const NotesView = class {
  root = null;
  constructor(root, handlers) {
    this.root = root;
    this.handlers = handlers;

    const listItem = `
    <div id="notes-list">
        <div class="note note-item">
            <div>Title</div>
            <textarea placeholder="Enter note" cols="20" rows="10">hello</textarea>
        </div>
    </div>
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
      console.log("click");
      this.createNoteElement();
    });
  }

  createNoteElement() {
    const note = this.handlers.getNewNote();
    // console.log(note);
    const id = `text-${note.id}`;

    const ele = `
        <div class="note note-item">
            <div>${note.title}</div>
            <textarea placeholder="Enter note" cols="20" rows="10" id=${id}>
            ${note.text}
            </textarea>
        </div> 
    `;

    const textInput = this.root.querySelector(`#${id}`);

    // console.log(textInput);

    const listItem = this.root.querySelector("#notes-list");

    /**
     * !insertBefore won't work because it do not work for html-string
     *
     * https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
     *
     * **/

    // listItem.insertBefore(ele, listItem.firstElementChild);

    listItem.insertAdjacentHTML("afterBegin", ele);

    textInput.addEventListener("blur", (t) => {
      note.text = t;
      this.handlers.updateNote(note);
    });
  }
};
