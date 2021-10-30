/*
Javascript file for documents
/* 

Multiline comment in js
*/

// Single line comment in js

// JSON

var quotes =
   [
      {
         "quote_text" : "If you have a garden in your library, everything will be complete.",
         "author" : "Marcus Tullius Cicero, Letter to Varro, 1st century AD"
      }
   ]
   
var clients = 
   [         
      {
         "title": "title1", 
         "description": "lepros davos etc."
      },
      { 
         "title": "title2", 
         "description": "lepros davos etc." 
      },
      {
         "title": "title3", 
         "description": "lepros davos etc."
      },
      {
         "title": "title4", 
         "description": "lepros davos etc."
      },
      {
         "title": "title5", 
         "description": "lepros davos etc."
      } 
   ]

function donothing() 
{
   console.log("hello there from js world!");
}

document.onclick = function(e) {
   console.log(e.target.className);
   console.log('');
   
   if(e.target.className !== 'big_menu menu_open' && e.target.className !== 'nav_burger' && e.target.className !== 'line_1' && e.target.className !== 'line_2')
   {
      console.log('hello');
      const nav_menu = document.querySelector('.big_menu');
      nav_menu.classList.remove('menu_open')
   }
   
}

function burger()
{
   const menu_button = document.querySelector('.nav_burger');
   const nav_menu = document.querySelector('.big_menu');

   let menu_open = false;

   menu_button.addEventListener('click', () => {

      nav_menu.classList.toggle('menu_open');
      console.log('toggle');
      /*

      
      if(!menu_open) {
         nav_menu.classList.add('menu_open');
         //nav_menu.classList.add('active');
         menu_open = true;
      } else {
         nav_menu.classList.remove('menu_open');
         //nav_menu.classList.remove('active');
         menu_open = false;
         */
      })
   
}

function opendiv()
{
   var icon = document.querySelector('#icon');
   const all_btn = document.querySelectorAll(".faq_toggle_btn");
   console.log(all_btn);

   all_btn.forEach((item) => {
      item.addEventListener('click', () => {
   
         const next = item.nextElementSibling;
         console.log(next);     

         const check = next.classList.toggle('faq_open');
         icon.classList.toggle('open')
         console.log(check);
      })
   })   
}

function createboxes()
{   
   const box_parent = document.querySelector('.boxes_wrapper');   
   
   //clients.forEach(element => console.log(element.title, element.description));

   clients.forEach(elem => {     
      const box_item_div = document.createElement('div');
      box_item_div.classList.add('box_item');

      box_parent.appendChild(box_item_div);
      box_item_div.innerHTML += '<h3>' + elem.title + '</h3>'
      box_item_div.innerHTML += '<p>' + elem.description + '</p>'
   })

   /*
   const all_boxes = document.querySelectorAll('.box_item');
   console.log(all_boxes);

   all_boxes.forEach((elem) => {
      console.log(elem);
      //elem.innerHTML = '<p></p>'
   })
   */
}

function pausePlay()
{
   const clip = document.querySelectorAll('.clip');
   clip.forEach(elem => {
      elem.addEventListener('mouseenter', () => {
         elem.play();
      })
      elem.addEventListener('mouseout', () => {
         elem.pause();
      })
   })
}
