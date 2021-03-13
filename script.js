let library = [];

// variables and event listeners
const addABook = document.getElementById("addBook");
const clearStorage = document.getElementById("clear-storage");
const bookForm = document.getElementById("bookForm");
const cancelFormButton = document.getElementById("cancelForm");
const numBooks = document.getElementById("numbooks");
const completed = document.getElementById("completed");
const inProgress = document.getElementById("in-progress");
cancelFormButton.addEventListener("click", function () {
  bookForm.style.visibility = "hidden";
});

addABook.addEventListener("click", function () {
  bookForm.reset();
  bookForm.style.visibility = "visible";
});
clearStorage.addEventListener("click", function () {
  library = [];
  localStorage.clear();
  publishLibrary();
});
const submitBook = document.getElementById("submitForm");
submitForm.addEventListener("click", function () {
  addBookToLibrary();
});
let parseLibrary = localStorage.getItem("myLibrary");
if (parseLibrary != null) {
  library = JSON.parse(parseLibrary);
  publishLibrary();
}
// console.log(library);
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
  // console.log(library);
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
      deleteButton.textContent = "X";

      let newTitle = document.createElement("DIV");
      newTitle.className = "newTitle";
      newTitle.innerHTML =
        "<span style = 'color: white'>TITLE: </span>" +
        "<span style = 'color: #21FD00'>" +
        library[i].title +
        "</span>";

      let newAuthor = document.createElement("DIV");
      newAuthor.className = "newAuthor";
      newAuthor.innerHTML =
        "<span style = 'color: white'>Author: </span>" +
        "<span style = 'color: #00FDDC'>" +
        library[i].author +
        "</span>";

      let newPages = document.createElement("DIV");
      newPages.className = "newPages";
      newPages.innerHTML =
        "<span style = 'color: white'>LENGTH: </span>" +
        "<span style = 'color: #DAF7A6'>" +
        library[i].pages +
        "</span>";

      let newStatus = document.createElement("DIV");
      newStatus.className = "newStatus";
      newStatus.innerHTML =
        "<span style = 'color: white'>STATUS: </span>" +
        "<span style = 'color: yellow'>" +
        library[i].status +
        "</span>";
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
        // console.log("clicked");
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
  numBooks.textContent = library.length;

  finishedBooks();
  function finishedBooks() {
    let completedCount = 0;
    let inProgressCount = 0;
    for (let i = 0; i < library.length; i++) {
      if (library[i].status === "Finished") {
        completedCount++;
      }
      if (library[i].status === "In Progress") {
        inProgressCount++;
      }
    }
    completed.textContent = completedCount;
    inProgress.textContent = inProgressCount;
  }
}
