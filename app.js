"use strict";

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function displayBooks() {
    let books = getBook();

    books.forEach((book) => addBook(book));

    function addBook(book) {
            const bookContainer = document.querySelector('.books');
        
            const bookItem = document.createElement('div');
        
            bookItem.innerHTML = `
               <p>${book.title}</p>
               <p>${book.author}</p>
               <button type="button" class="remove-book">remove</button>    
            `;
        
            bookContainer.appendChild(bookItem);
    }

    document.querySelector('#app-form').addEventListener('submit', (e) => {
        e.preventDefault();
    
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        
        const book = new Book(title, author);
    
        addBook(book); 
        const books = getBook();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books)) 


    })

    function getBook() {
        let books = [];

        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }

        return books
    }


    function deleteBook(el) {
        if(el.classList.contains('remove-book')){
            el.parentElement.remove()
        }
        const books = getBook();
        books.splice(el);
        localStorage.setItem('books', JSON.stringify(books))
    }

    document.querySelector('.books').addEventListener('click', (e) => {
        deleteBook(e.target)
    })
}

document.addEventListener('DOMContentLoaded', displayBooks)

