"use strict";

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function displayBooks() {
    const storedBooks = [];

    const books = storedBooks;
    
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
    })

    

    function deleteBook(el) {
        if(el.classList.contains('remove-book')){
            el.parentElement.remove()
        }
    }

    document.querySelector('.books').addEventListener('click', (e) => {
        deleteBook(e.target)
    })

}

document.addEventListener('DOMContentLoaded', displayBooks)

