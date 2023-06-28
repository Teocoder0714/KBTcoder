window.onload = function() {
    // Get the current page URL
    var url = window.location.pathname;

    // Get the menu links
    var menuLinks = document.querySelectorAll('ul.menu a');

    // Loop through the links and check if their href matches the current URL
    for (var i = 0; i < menuLinks.length; i++) {
      if (menuLinks[i].getAttribute('href') === url) {
        menuLinks[i].classList.add('active');
      }
    }
  };

var quadimages = document.querySelectorAll("#quad figure");
    for(i=0; i<quadimages.length; i++) {
      quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
    }
$(document).ready(function(){
	
	$('body').addClass('light');
	
	$('ul.menu li').mouseover(function(){
		$('body').addClass('dark').removeClass('light');
	});
	
	$('ul.menu li').mouseout(function(){
		$('body').addClass('light').removeClass('dark');
    });
})

