
alert("Hi!");

function myFunction() {
  document.getElementById("demo").innerHTML = "H T M L ain't that difficult. Fortunately I have passion to pursue this. Will work on huge update for this site, given time ";
}

   $(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
		});
	});