"use strict";

class Book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
}

class UI {
    static displayBooks() {
        const books = Storage.getBooks();

        books.forEach((book) => UI.addBooks(book))
    }

    static addBooks(book) {
        const bookContainer = document.querySelector('.books');

        const bookItem = document.createElement('tr');

        bookItem.innerHTML = `
        <td>${book.title} by ${book.author}</td>
        <td><button type="button" data-ref="${book.id}" class="remove-book">remove</button></td>
        `
       
        bookContainer.appendChild(bookItem);
    }

    static deleteBook(el) {
        if(el.classList.contains('remove-book')){
            el.parentElement.parentElement.remove()
        }
   }

    static clearValues() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
    }
}

class Storage {
    static getBooks(){
        let books;

        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books
    }

    static addToStore(book){
        const books = Storage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books)); 
    }

    static removeBook(id){
        let books = Storage.getBooks();
        books = books.filter(item => item.id != id);
        localStorage.setItem('books', JSON.stringify(books)); 
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);


document.querySelector('#app-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const id = Math.random();
    const book = new Book(title, author, id);

    UI.addBooks(book);

    Storage.addToStore(book)

    UI.clearValues();
})

document.querySelector('.books').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    Storage.removeBook(e.target.getAttribute('data-ref'));
})

