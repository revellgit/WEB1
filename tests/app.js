console.log('hello');

let quote = [
	'Quote 1',
	'Quote 2',
	'Quote 3'
	]

function start()
{ 
	var elem = document.querySelector('.main-carousel');
	var flkty = new Flickity( elem, {
	  // options
	  cellAlign: 'left',
	  contain: true
	});
} 

function arrow()
{
	var div = document.querySelector('#container');
	var icon = document.querySelector('#icon');
	var open = false;
	
	div.addEventListener('click', () =>
	{
		icon.classList.toggle('open')
	});
}
  
 function timer()
 {
	 const timerDiv = document.querySelector('.quotes');
	 setInterval(function () {
		 let max = 3;
		 let whichQuote = Math.floor(Math.random() * max);
		 console.log(whichQuote);
		 timerDiv.innerHTML = '<p>' + quote[whichQuote] + '</p>'
	 }, 2000);	 
 }