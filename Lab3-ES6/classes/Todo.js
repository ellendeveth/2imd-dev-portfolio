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
   
    //newNote.classList.add('prior-low');
    if(this.title.includes("high:")){
      newNote.classList.add("prior-high");
      this.title = this.title.replace("high", "hallo");
      

    } else if(this.title.includes("low:")){
      newNote.classList.add("prior-low");
      this.title.replace("low", "hallo");
    } else {
      //sowieso medium
      newNote.classList.add("prior-medium");
      //this.title.replace("medium", "hallo");
    } 
   
    // don't forget to hook up an event listener for the click event
    newNote.addEventListener("click", this.markDone.bind(newNote) );

    return newNote;
  }

  markDone(e) {
    // HINT🤩
    // this function should mark the current todo as done, by adding the correct CSS class
    this.classList.add("done");
  
    // if the item is clicked, but was already marked as done, remove the item from the list
    this.addEventListener("click", () => {
      if(this.className.includes("done")){
        this.addEventListener("click", this.remove());
        //console.log('klik');
      }
    })
    
    
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
    let item = [];
    let string = JSON.stringify(item);
    console.log(string);
    if(localStorage.getItem("items") === null){ //geen array, dus lege array vullen
      item.push(this.title);
      console.log(string);
      localStorage.setItem('items', string);
      
    }else {   //array ophalen en uitsplitsen om daarna toe te voegen
      item = JSON.parse(localStorage.getItem('items'));
      item.push(this.title);
      localStorage.setItem('items', string);
    }
   
    
    
  }
}
