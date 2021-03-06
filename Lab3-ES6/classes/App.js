import Todo from "./Todo.js"

export default class App {
    constructor() {
      console.log("🍕");
      // HINT🤩
      // set up the enter Key
      this.setupEventListeners();
      // when the app loads, we can show previously saved items from localstorage
      this.loadFromStorage();
    }
  
    setupEventListeners() {
      console.log("👂🏽");
      // HINT🤩
      // pressing the enter key in the text field triggers the createItem function
      document.querySelector("#add-item-text").addEventListener("keyup", this.createItem.bind(this)); // behoudt de waarde van this
      // addEventListener("keyup", this.createItem.bind(this));
      // read up on .bind() -> we need to pass the current meaning of this to the eventListener
      // while testing, feel free to console.log(this) to see what's in it
    }
  
    createItem(e) {
      // HINT🤩
      // this function should create a new todo by using the Todo() class
      // new Todo(text)
      // todo.add();
      // todo.saveToStorage();
      // if you used bind() in the previous function, you'll notice that this refers to the current class instance
      // clear the text field with .reset() after adding the item
      // if (e.key === "Enter")
      if (e.key === "Enter") {
        console.log("📕");

        let todoValue = document.querySelector("#add-item-text");
        let todo = new Todo(todoValue.value);
        todo.add();
        todo.saveToStorage();
        this.reset(todoValue);
    }
    // this.reset();
    console.log(this);
    }
  
    loadFromStorage() {
      // HINT🤩
      // load all items from storage here and add them to the screen
      let items = localStorage.getItem("items");
      items = JSON.parse(items);

      if(items !== null){
        // use the Todo class to create the elements
        items.forEach(element => {
          let item = new Todo(`${element['level']}:${element['title']}`);
          if(element['status'] === "done"){
            item.add("done");
          } else{
            item.add();
          }
          
        });
      } 
      
    }
  
    reset(element) {
      // this function should reset the form / clear the text field
      element.value = "";
      //console.log(element);
      
    }
  }
  