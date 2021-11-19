// Javascript file : scripts.js

/*
Multiline comment in js
// Single line comment in js
*/


// Array to store the text for the boxes for the native species section
// https://www.doc.govt.nz/nature/native-plants/
var clients =
   [
      {
         "title": "Beech forest",
         "description": "New Zealand's beech forests are made up of five species of southern beech."
      },
      {
         "title": "Cabbage tree",
         "description": "The cabbage tree is one of the most distinctive trees in the New Zealand landscape, especially on farms. They grow all over the country, but prefer wet, open areas like swamps."
      },
      {
         "title": "Chatham Islands plants",
         "description": "The Chatham Islands have been isolated for more than 80 million years, long enough to develop many plants found nowhere else."
      },
      {
         "title": "Coastal cress",
         "description": "The coastal cress is one of New Zealand's lesser-known endangered species, but there is considerable concern about the decline of this plant."
      },
      {
         "title": "Dactylanthus",
         "description": "Dactylanthus is New Zealand's only indigenous fully parasitic flowering plant."
      },
      {
         "title": "New Zealand ferns",
         "description": "New Zealand has an unusually high number of fern species for a temperate country and about 40 per cent of these species occur nowhere else in the world."
      },
      {
         "title": "Freshwater algae",
         "description": "Green slime and brown scum on stream beds is usually regarded as an unattractive nuisance however, it is a vital part of stream ecosystems."
      },
      {
         "title": "Golden sand sedge",
         "description": "Pīkao or pīngao is a native sand-binding sedge that plays an important role in New Zealand's dune ecosystems."
      },
      {
         "title": "Harakeke/flax",
         "description": "There are two identified species of flax in New Zealand - common flax (harakeke) and mountain flax (wharariki)."
      },
      {
         "title": "Kakabeak/Ngutukaka",
         "description": "Kākābeak is named for its beautiful red flowers, which hang in clusters of 15-20 blooms and are shaped like a kaka's beak."
      },
      {
         "title": "Kauri",
         "description": "Kauri are among the world's mightiest trees, growing to over 50 m tall, with trunk girths up to 16 m, and living for over 2,000 years."
      },
      {
         "title": "Kettle hold plants",
         "description": "Kettle holes are a feature of a glaciated landscape. Plants in these habitats have a remarkable lifecycle."
      },
      {
         "title": "Kowhai",
         "description": "The kōwhai is one of the best known native trees in New Zealand and it’s our unofficial national flower."
      },
      {
         "title": "Lancewood/Horoeka",
         "description": "Lancewood, or horoeka, is a unique, small tree with lance-like foliage that changes dramatically as the tree matures."
      },
      {
         "title": "Mount Cook buttercup",
         "description": "The Mount Cook buttercup is the world's largest buttercup and is also known as the giant buttercup or mountain buttercup. It used to be known as the Mount Cook lily."
      },
      {
         "title": "Nikau palm",
         "description": "The nīkau palm is the southernmost member of the palm family and New Zealand's only native palm species."
      }
   ]

function donothing() {
   console.log("hello there from js world!");
}

// this function allows the user to click outside the nav menu to close it
document.onclick = function (e) {
   if (e.target.className !== 'big_menu menu_open' && e.target.className !== 'nav_burger active') {
      const nav_menu = document.querySelector('.big_menu');
      const menu_button = document.querySelector('.nav_burger');

      nav_menu.classList.remove('menu_open')
      menu_button.classList.remove('active');
   }
}

// Add an click event to the nav burger symbol so that
// the nav menu will appear or close.
function burger() {
   const menu_button = document.querySelector('.nav_burger');
   const nav_menu = document.querySelector('.big_menu');

   menu_button.addEventListener('click', () => {
      nav_menu.classList.toggle('menu_open');
      menu_button.classList.toggle('active');
   })
}

// Function to create many clickable areas that are used in the faq section
// to make a div appear showing the answer to a question.
function opendiv() {
   const all_btn = document.querySelectorAll(".question_text");
   console.log(all_btn);

   all_btn.forEach((item) => {
      item.addEventListener('click', (e) => {
         // When the user clicks on the question text the necessary document elements (faq_box, angle icon)
         // are found and open classes toggled on them. This will make the angle rotate or the div appear.
         const next = item.nextElementSibling; // faq_box
         const ch = item.children[1];
         
         const check = next.classList.toggle('faq_open');
         console.log(check);
         item.children[1].classList.toggle('open');
      })
   })
}

function createboxes() {
   const box_parent = document.querySelector('.boxes_wrapper');
   let delay = 0;

   clients.forEach(elem => {
      // Using a loop to create many 'box' divs and attach attributes for on-scroll animations
      const box_item_div = document.createElement('div');

      // The scroll animation delay is calculated to create a staggered appearance effect
      let delayAmount = 100 * (delay % 4);

      box_item_div.classList.add('box_item');
      box_item_div.setAttribute('data-aos', 'fade-up');
      box_item_div.setAttribute('data-aos-delay', delayAmount);
      box_item_div.setAttribute('data-aos-duration', '500');

      // Each box div will have a heading and text attached to it
      // the text is stored locally in the 'clients' array
      box_item_div.innerHTML += '<h3>' + elem.title + '</h3>'
      box_item_div.innerHTML += '<p>' + elem.description + '</p>'

      box_parent.appendChild(box_item_div);
      delay += 1;
      console.log(delayAmount);
   })
}

// Play or pause a video clip in the hover_images section
// when the user hovers over or leaves one.
function pausePlay() {
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


// Allow an image to appear and disappear as the user
// mousesover and leaves the text in table of planting suggestions

function showSuggestion() {
   const suggText = document.querySelectorAll('.suggestion_text');

   suggText.forEach(elem => {
      elem.addEventListener('mouseenter', () => {
         // The img is the next element in the document after the text
         // The img has opacity set to 0 initially
         // But will transition to opacity 1 when mouseover happens
         const img = elem.nextElementSibling;
         img.classList.add('appear');
         console.log(img);
      })
      elem.addEventListener('mouseout', () => {
         const img = elem.nextElementSibling;
         img.classList.remove('appear');
         console.log('out');
      })
   })
}

// https://www.daviddomoney.com/35-inspirational-gardening-quotes-and-famous-proverbs/


// Quotes stored locally to be used for the section that updates on a timer
// See function quotesTimer below

var quote =
   [
      {
         "text": "If you have a garden in your library, everything will be complete.",
         "author": "Marcus Tullius Cicero, Letter to Varro, 1st century AD"
      },

      {
         "text": "Life begins the day you start a garden.",
         "author": "Chinese proverb"
      },

      {
         "text": "There are no gardening mistakes, only experiments.",
         "author": "Janet Kilburn Phillips"
      },

      {
         "text": "Gardening adds years to your life and life to your years. ",
         "author": "Unknown"
      },

      {
         "text": "A society grows great when old men plant trees whose shade they know they shall never sit in.",
         "author": "Greek proverb"
      },
      {
         "text": "Garden as though you will live forever.",
         "author": "William Kent"
      }
   ]

// Display a random quote and author that is stored as local data (above)
// Add the text elements to a div

function quotesTimer() {
   const quoteTextDiv = document.querySelector('.quote_text');
   const quoteAuthorDiv = document.querySelector('.quote_author');

   setInterval(function () {
      // Choose a random number up to the max
      let max = 6;
      let whichQuote = Math.floor(Math.random() * max);

      console.log(whichQuote);

      // Use the random number to look up the text and author from the quotes stored locally
      // Then insert the text into the document.
      quoteTextDiv.innerHTML = '<span>' + quote[whichQuote].text + '</span>';
      quoteAuthorDiv.innerHTML = '<span>' + quote[whichQuote].author + '</span>';
   }, 10000);
}

// Get/Fetch a random quote (with id) from an API stored on Heroku
// Uses a proxy app to avoid CORS errors

function api() {
   let quotesDiv = document.getElementById('quotes')

   let max = 6;
   let whichQuote = Math.floor(Math.random() * max);

   fetch("https://stormy-harbor-45590.herokuapp.com/https://quiet-earth-90814.herokuapp.com/quotes/" + whichQuote)
      .then(res => res.json())
      .then(quote => {
         quotesDiv.innerHTML += `<p> ${quote.text} </p>`
      })
}

// API code used to randomly return one of six quotes stored on Heroku at
// https://quiet-earth-90814.herokuapp.com/quotes/?

/*
const express = require("express");
const app = express();
const importData = require("./data.json");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("Hello World")
})

app.get("/quotes/:id", (req, res) => {
	res.send(importData[req.params.id]);
});

console.log(importData[0].name);

app.listen(port, () => {
	console.log(`Example app is listening on port http://localhost:${port}`);
});
*/