class Todo {
    constructor(title) {
      // HINT🤩
      // use a constructor to set basic property values
      // this.title = title;
      this.title = title;
    }
  
    createElement(title) {
      // HINT🤩
      // this method will create the HTML structure with the correct classes, based on the todo priority
      // let newNote = document.createElement("li");
      // check if the todo item includes a priority like medium: to generate the correct classnames
      // don't forget to hook up an event listener for the click event
      // return newNote;
      let newNote = document.createElement("li");
      
      if(title.includes("high")){
        newNote.className = "prior-high";

      } else if(title.includes("low")){
        newNote.className = "prior-low";
      } else {
        //sowieso medium
        newNote.className = "prior-medium";
      }

      newNote.innerHTML = title;

      newNote.addEventListener("click", this.remove() );
      return newNote;
    }
  
    markDone(e) {
      // HINT🤩
      // this function should mark the current todo as done, by adding the correct CSS class
      // if the item is clicked, but was already marked as done, remove the item from the list
    }
  
    add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      // let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
    }
  
    saveToStorage() {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
  }
  