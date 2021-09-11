/*
Javascript file for documents
/* 

Multiline comment in js
*/

// Single line comment in js

function donothing() 
{
   console.log("hello there from js world!");
}

function burger()
{
   const menu_button = document.querySelector('.nav_burger');
   const nav_menu = document.querySelector('.big_menu');

   let menu_open = false;

   menu_button.addEventListener('click', () => {
      if(!menu_open) {
         nav_menu.classList.add('menu_open');
         menu_open = true;
      } else {
         nav_menu.classList.remove('menu_open');
         menu_open = false;
      }
   })
}

function opendiv()
{
   const div_button = document.querySelector('#button_1');
   const div_box = document.querySelector('.box_1');

   let div_open = false;

   div_button.addEventListener('click', () => {
      if(!div_open) {
         div_box.style.display = 'inline-block';
         div_open = true;
      } else {
         div_box.style.display = 'none';
         div_open = false;
      }
   })
}
