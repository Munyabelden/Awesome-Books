"use strict";

import { Book, UI, Storage } from './modules/app.js';

import './modules/nav.js';

import './modules/date.js';

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
