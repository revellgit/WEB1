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
      //console.log('hello');
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
      })
   
}

function opendiv()
{
   //var icon = document.querySelectorAll('.icon');
   const all_btn = document.querySelectorAll(".question_text");
   console.log(all_btn);
   //console.log(icon);

   all_btn.forEach((item) => {
      item.addEventListener('click', (e) => {
   
         console.log("Item");     
         console.log(item);
         const next = item.nextElementSibling; // faq_box
         const ch = item.children[1];
         console.log("Children");
         console.log(ch);
         
         const check = next.classList.toggle('faq_open');
         console.log(check);
         item.children[1].classList.toggle('open');         
      })
   })
}

function createboxes()
{   
   const box_parent = document.querySelector('.boxes_wrapper');   
   
   clients.forEach(elem => {     
      const box_item_div = document.createElement('div');
      box_item_div.classList.add('box_item');

      box_parent.appendChild(box_item_div);
      box_item_div.innerHTML += '<h3>' + elem.title + '</h3>'
      box_item_div.innerHTML += '<p>' + elem.description + '</p>'
   })

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
