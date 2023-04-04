'use strict'
/* Quando clico no .button, .nav TOGGLE 'activo' */
const button = document.querySelector('button');/*me permite selecionar os dois elementos  */
const nav    = document.querySelector('nav');
const header = document.querySelector('header');
const wrapper = document.querySelector('wrapper')


button.addEventListener('click',()=>{
  nav.classList.toggle('activo')
  header.classList.toggle('activo')
  wrapper.classList.toggle('activo')
  
})
