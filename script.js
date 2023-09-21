const myLibrary = [];

function Book(title,author,pages,read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
}

function toggleRead(index){
  myLibrary[index].toggleRead();
  render();
}

function render(){
  let libraryEl = document.querySelector('#library');
  libraryEl.textContent = '';
  for(i = 0; i< myLibrary.length ; i++){
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `
    <p>${book.title} <br> , ${book.author} , ${book.pages} , ${book.read ? "Read" : "Not Read Yet"}</p>
    <button onclick="removeBook(${i})">Remove</button>
    <button onclick="toggleRead(${i})">Toggle Read</button>
    
    `;
    
    libraryEl.appendChild(bookEl);
  }

}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  let newBook = new Book(title,author,pages,read);
  myLibrary.push(newBook);
  render();
}

let newbookbtn = document.querySelector("#new-book-btn");
newbookbtn.addEventListener("click",function(){
    let newbookform = document.querySelector("#new-book-form");
    newbookform.style.display = 'block';
})

document.querySelector("#new-book-form").addEventListener("submit",function(event){
    event.preventDefault();
    addBookToLibrary();
})

function removeBook(index){
  myLibrary.splice(index,1);
  render();
}

