document.addEventListener('DOMContentLoaded', () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => { nav.classList.toggle('nav-active'); });

const form = document.getElementById('contact-form');
const messageP = document.getElementById('form-message');
if(form){
form.addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
if(name && email && message){
messageP.textContent = 'Form submitted successfully!';
messageP.style.color = 'green';
form.reset();
} else {
messageP.textContent = 'Please fill in all fields correctly.';
messageP.style.color = 'red';
}
});
}
});