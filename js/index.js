const toggleAppbar = () => {
	const nav = document.getElementById("mainNavbar");
	if(window.pageYOffset < nav.offsetHeight){
		nav.classList.remove('scrolled');
		nav.classList.remove('navbar-light');
		nav.classList.add('navbar-dark');
	}
	else{
		nav.classList.add('scrolled');
		nav.classList.remove('navbar-dark');
		nav.classList.add('navbar-light');
	}
}

window.addEventListener('scroll', toggleAppbar);
