$(function () {
  	$(document).scroll(function () {
	  	const nav = document.getElementById("mainNavbar");
		$(nav).toggleClass('scrolled', $(this).scrollTop() > $(nav).height());
		if($(this).scrollTop() > $(nav).height()){
			nav.classList.remove('navbar-dark');
			nav.classList.add('navbar-light');
		}
		else{
			nav.classList.remove('navbar-light');
			nav.classList.add('navbar-dark');
		}
	});
});