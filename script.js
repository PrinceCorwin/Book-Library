let library = [];

let parseLibrary = localStorage.getItem("myLibrary");
if (parseLibrary != null) {
  library = JSON.parse(parseLibrary);
  publishLibrary();
}
console.log(library);
// may uncomment the following publishLibrary() after database set-up.
// publishLibrary();

// variables and event listeners
const addABook = document.getElementById("addBook");
const bookForm = document.getElementById("bookForm");
const cancelFormButton = document.getElementById("cancelForm");
cancelFormButton.addEventListener("click", function () {
  bookForm.style.visibility = "hidden";
});
addABook.addEventListener("click", function () {
  bookForm.reset();
  bookForm.style.visibility = "visible";
});
const submitBook = document.getElementById("submitForm");
submitForm.addEventListener("click", function () {
  addBookToLibrary();
});
// book constructor
function Book(title, author, pages, status, rating) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.status = status;

  this.rating = rating;
}

// add a book and publish library
function addBookToLibrary() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("bookPages").value;
  const status = document.getElementById("bookStatus").value;
  const rating = document.getElementById("bookRating").value;
  const myBook = new Book(title, author, pages, status, rating);
  library.push(myBook);
  console.log(library);
  bookForm.style.visibility = "hidden";
  publishLibrary();
}

// publish library
function publishLibrary() {
  if (library === []) {
    document.getElementById("bookList").innerHTML = "";
    return;
  } else {
    document.getElementById("bookList").innerHTML = "";
    for (let i = 0; i < library.length; i++) {
      let newBook = document.createElement("DIV");
      newBook.className = "newBook";
      let deleteButton = document.createElement("BUTTON");
      deleteButton.className = "deleteButton";
      deleteButton.textContent = "DELETE";
      let newTitle = document.createElement("DIV");
      newTitle.className = "newTitle";
      newTitle.textContent = "TITLE: " + library[i].title;

      let newAuthor = document.createElement("DIV");
      newAuthor.className = "newAuthor";
      newAuthor.textContent = "AUTHOR: " + library[i].author;

      let newPages = document.createElement("DIV");
      newPages.className = "newPages";
      newPages.textContent = "LENGTH: " + library[i].pages + " pages";

      let newStatus = document.createElement("DIV");
      newPages.className = "newStatus";
      newStatus.textContent = "STATUS: " + library[i].status;

      let newRating = document.createElement("DIV");
      newRating.className = "newRating";
      newRating.textContent = "MY RATING: " + library[i].rating;

      newBook.appendChild(newTitle);
      newBook.appendChild(newAuthor);
      newBook.appendChild(newPages);
      newBook.appendChild(newStatus);
      newBook.appendChild(newRating);
      newBook.appendChild(deleteButton);
      deleteButton.addEventListener("click", function () {
        console.log("clicked");
        library.splice(i, 1);
        publishLibrary();
      });
      document.getElementById("bookList").appendChild(newBook);
    }
    function populateStorage() {
      // console.log(library);
      let stringLibrary = JSON.stringify(library);
      localStorage.setItem("myLibrary", stringLibrary);
    }
    populateStorage();
  }
}
