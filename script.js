const library = [];
// may uncomment the following publishLibrary() after database set-up. 
// publishLibrary();

// book constructor
function book(title, author, pages, status, myReview) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // status: make drop down in page with "not read", "finished", "reading"
  this.status = status;
  // myReview is dropdown with "haven't decided" and 1-5 stars
  this.myReview = myReview;
}

// add a book and publish library
function addBookToLibrary {
  const title = ;
  const author = ;
  const pages = ;
  const status = ;
  const myReview = ;
const myBook = new book(title, author, pages, status, myReview);
library.push(myBook);
publishLibrary();
}

// publish library
function publishLibrary() {
  if (library === []) {
    return;
  } else {
  for (let i = 0; i < library.length; i++) {
    // create DOM elements here
  }
}
}