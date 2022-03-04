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
   
   
    
    //newNote.classList.add('prior-low');
    if(this.title.includes("high:")){
      newNote.classList.add("prior-high");
      this.title = this.title.replace("high:", "");
      
    } else if(this.title.includes("low:")){
      newNote.classList.add("prior-low");
      this.title = this.title.replace("low:", "");

    } else {
      //sowieso medium
      newNote.classList.add("prior-medium");
      this.title = this.title.replace("medium:", "");
      //this.title.replace("medium", "hallo");
    } 
    newNote.innerHTML = this.title;
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
        let items = localStorage.getItem("items");
        items = JSON.parse(items);
        
        let text = this.innerHTML;
        let thisText = (item) => item === text;
        let index = items.findIndex(thisText);
        items.splice(index, 1);
        localStorage.setItem("items", JSON.stringify(items));

       

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
    

    if(localStorage.getItem("items") === null){ //geen array, dus lege array vullen
      let item = [];
      let string = JSON.stringify(item);
      item.push(this.title);
      localStorage.setItem('items', string);

    }else {   //array ophalen en uitsplitsen om daarna toe te voegen
      let item = JSON.parse(localStorage.getItem('items'));
      item.push(this.title);
      let string = JSON.stringify(item);
      localStorage.setItem('items', string);
    }



  }

}
