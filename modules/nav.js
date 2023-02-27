"use strict";

const listBtn = document.querySelector('#list-btn');
const formBtn = document.querySelector('#form-btn');
const contactBtn = document.querySelector('#contact-btn');

const table = document.querySelector('#book');
const addPage = document.querySelector('#app-form');
const contact = document.querySelector('.contact');


listBtn.addEventListener('click', () => {
    table.style.display = 'flex';
    addPage.style.display = 'none';
    contact.style.display = 'none';
})

formBtn.addEventListener('click', () => {
    table.style.display = 'none';
    addPage.style.display = 'flex';
    contact.style.display = 'none';
})

contactBtn.addEventListener('click', () => {
    table.style.display = 'none';
    addPage.style.display = 'none';
    contact.style.display = 'flex';
})