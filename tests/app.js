  console.log('hello');
  
  

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