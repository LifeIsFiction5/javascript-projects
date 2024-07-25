// Define your Book class here:

class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, trashed){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.trashed = trashed;
    }

    checkout(uses=1) {
        this.timesCheckedOut += uses;
    }

}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, trashed){
        super(title, author, copyright, isbn, pages, timesCheckedOut, trashed);
    }

    dispose(currentYear){
        if (currentYear-this.copyright > 5) {
            this.trashed = 'Yes';
        }
    }
}


class Novel extends Book {
        constructor(title, author, copyright, isbn, pages, timesCheckedOut, trashed){
            super(title, author, copyright, isbn, pages, timesCheckedOut, trashed);
        }

        dispose(){
            if (this.timesCheckedOut > 100) {
               this.discarded = 'Yes';
            }
         }
      }


// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', '1813', 1111111111111, 432, 32, "No");
let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacteded', '2013', 0000000000000, 1147, 1, "No");

let currentYear = 2023;

// Code exercises 4 & 5 here:

makingTheShip.checkout(5);
prideAndPrejudice.dispose();


console.log(prideAndPrejudice);
