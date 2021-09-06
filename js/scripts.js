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
   let menu_open = false;

   menu_button.addEventListener('click', () => {
      if(!menu_open) {
         menu_button.classList.add('open');
         menu_open = true;
      } else {
         menu_button.classList.remove('open');
         menu_open = false;
      }
   })
}
