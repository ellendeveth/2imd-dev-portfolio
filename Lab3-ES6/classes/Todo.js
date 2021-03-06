export default class Todo {
  constructor(title, level, status) {
    // HINT🤩
    // use a constructor to set basic property values
    this.title = title;
    this.level = level;
    this.status = status;
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
      this.level = "high";

    } else if(this.title.includes("low:")){
      newNote.classList.add("prior-low");
      this.title = this.title.replace("low:", "");
      this.level = "low";

    } else {
      //sowieso medium
      newNote.classList.add("prior-medium");
      this.title = this.title.replace("medium:", "");
      //this.title.replace("medium", "hallo");
      this.level = "medium";
    } 
    newNote.innerHTML = this.title;
    // don't forget to hook up an event listener for the click event
    newNote.addEventListener("click", this.markDone.bind(newNote) );
    
    return newNote;
  }

  markDone(e) {
    // HINT🤩
    // this function should mark the current todo as done, by adding the correct CSS class
    let items = localStorage.getItem("items");
    items = JSON.parse(items);
    let level;

    items.forEach((element, index) => {
      if(element['level'] === level && element['title'] === this.innerHTML){
        let item =items[index];
        if(item.status){
          console.log("ja");
        }
      }
      });

    if(this.className.includes("prior-low"))
      {
        level =  "low"
      } else if(this.className.includes("prior-medium"))
      {
        level =  "medium"
      }else if(this.className.includes("prior-high"))
      {
        level =  "high"
      }

    // if the item is clicked, but was already marked as done, remove the item from the list
    
      if(this.className.includes("done")){
        this.addEventListener("click", this.remove());
        //console.log('klik');
        
        //let text = this.innerHTML;
        
       // let index = items.indexOf(text);
       // items.splice(index, 1);
       // localStorage.setItem("items", JSON.stringify(items));

       items.forEach((element, index) => {
        if(element['level'] === level && element['title'] === this.innerHTML){
          items.splice(index, 1);
          localStorage.setItem("items", JSON.stringify(items));
        }
        });
       

      } else {
        this.classList.add("done");

        items.forEach((element, index) => {
          if(element['level'] === level && element['title'] === this.innerHTML){
            //getting object
           let item =items[index];

           //setting status from false to true
           item["status"] = "done";

           //parsing the item to the string
           let string = JSON.stringify(items);

           //savin item to localstorage
          localStorage.setItem('items', string);
           
          }
          });
      }
    
    };

  add(done) {
    // HINT🤩
    // this function should append the note to the screen somehow
    let todo = this.createElement(); // should return a full <li> with the right classes and innerHTML
    if(done){
      todo.classList.add("done");
    }
    document.querySelector("#todo-list").appendChild(todo);
  }

  saveToStorage() {
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    

    if(localStorage.getItem("items") === null){ //geen array, dus lege array vullen
      let item = [];
      
      item.push({"level":this.level ,"title": this.title, 'status': "todo"});
      let string = JSON.stringify(item);
      localStorage.setItem('items', string);

    }else {   //array ophalen en uitsplitsen om daarna toe te voegen
      let item = JSON.parse(localStorage.getItem('items'));
      item.push({"level":this.level ,"title": this.title, 'status': "todo"});
      let string = JSON.stringify(item);
      localStorage.setItem('items', string);
    }



  }

}
