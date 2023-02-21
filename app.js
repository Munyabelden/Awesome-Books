"use strict";

function displayBooks() {
    let books = getBook();

    books.forEach((book) => addBook(book));

    function addBook(book) {
            const bookContainer = document.querySelector('.books');
        
            const bookItem = document.createElement('div');
        
            bookItem.innerHTML = `
               <p>${book.title}</p>
               <p>${book.author}</p>
               <button type="button" data-ref="${book.id}" class="remove-book">remove</button>    
            `;
        
            bookContainer.appendChild(bookItem);
    }

    document.querySelector('#app-form').addEventListener('submit', (e) => {
        e.preventDefault();
    
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const id = Math.random();
        const book = {title, author, id};
    
        addBook(book); 
        books.push(book);
        addToStorage();
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

    function removeBook(id){
        books = books.filter(item => item.id != id);
        addToStorage();
    }

    function addToStorage() {
        localStorage.setItem('books', JSON.stringify(books)) 
     }
    
    function deleteBook(el) {
         if(el.classList.contains('remove-book')){
             el.parentElement.remove()
         }
    }

    document.querySelector('.books').addEventListener('click', (e) => {
        deleteBook(e.target)
        removeBook(e.target.getAttribute('data-ref'))
    })
}

document.addEventListener('DOMContentLoaded', displayBooks)

