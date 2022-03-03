export default class Todo {
  constructor(title) {
    // HINT🤩
    // use a constructor to set basic property values
    this.title = title;
  }

  createElement() {
    // HINT🤩
    // this method will create the HTML structure with the correct classes, based on the todo priority
    // check if the todo item includes a priority like medium: to generate the correct classnames
    let newNote = document.createElement("li");
    newNote.innerHTML = this.title;

    if(title.includes("high")){
      newNote.className = "prior-high";

    } else if(title.includes("low")){
      newNote.className = "prior-low";
    } else {
      //sowieso medium
      newNote.className = "prior-medium";
    }

    // don't forget to hook up an event listener for the click event
    newNote.addEventListener("click", this.markDone() );

    return newNote;
  }

  markDone(e) {
    // HINT🤩
    // this function should mark the current todo as done, by adding the correct CSS class
    newNote.classList.add("done");
    // if the item is clicked, but was already marked as done, remove the item from the list
    if(newNote.classlist.includes("done")){
      newNote.addEventListener("click", this.remove());
    }
  }

  add() {
    // HINT🤩
    // this function should append the note to the screen somehow
    let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
    document.querySelector("#todo-list").appendChild(todo);
  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
}
