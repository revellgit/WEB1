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
   const all_btn = document.querySelectorAll(".faq_toggle_btn");
   console.log(all_btn);

   all_btn.forEach((item) => {
      item.addEventListener('click', () => {
   
         const next = item.nextElementSibling;
         console.log(next);     

         const check = next.classList.toggle('faq_open');
         console.log(check);
      })
   })   
}

function createboxes()
{   
   const box_parent = document.querySelector('.boxes_wrapper');  
   // box_parent.classList.add('boxes_styles');

   for(i = 0; i < 56; i++)
   {      
      console.log(box_parent);
      const box_item_div = document.createElement('div');
      box_item_div.classList.add('box_item');

      console.log(box_item_div);

      box_parent.appendChild(box_item_div);
   }

   
}

