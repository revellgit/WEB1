  console.log('hello');
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
	  })
  }
  
 