import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function() {
	//* --- Fixed Menu --- *//
	$(window).on('scroll', function() {
		let scroll = $(window).scrollTop();
		if (scroll < 500) {
			$(".header").removeClass("fixed");
		} else {
			$(".header").addClass("fixed");
		}
	});
	
	if (document.body.clientWidth < 991) {
		$('.header__logo').attr('src', 'img/footer/logo.svg');
		
		$(window).on('scroll', function() {
			let scroll = $(window).scrollTop();
			if (scroll > 20) {
				$(".header").addClass("opacity");
			} if (scroll > 500) {
				$(".header").removeClass("opacity");
			}
		});
	}

	//* --- Changing images --- *//
	// const hero = document.querySelector('.hero');
	// const images = ['image1', 'image2', 'image3'];

	window.onload = () => {
		const hero = $('.hero');
		const images = ['image', 'image1', 'image2', 'image3'];
		let counter = 0;

		setInterval(() => {
			counter++;
			hero.fadeOut(300, function() {
  				hero.removeClass(images.join(' ')).addClass(images[counter % images.length]).fadeIn(500); 
			});
		}, 5000);
	}


	//* --- Burger --- *//
	const burger = document.querySelector('.header__burger');
	const burgerMenu = document.querySelector('.nav');
	const burgerList = [burger, burgerMenu];
	burger.addEventListener('click', () => {
		burgerList.forEach((e) => {
			e.classList.toggle('active');
		})
		
		// Anchor crossing
		for (let i = 0; i < burgerList.length; i++) {
			if (burgerList[i].classList.contains('active')) {
				document.body.style.overflow = 'hidden';
				document.documentElement.style.scrollBehavior = 'auto';
			} else {
				document.body.style.overflow = 'auto';	
				document.documentElement.style.scrollBehavior = 'smooth';
			}
		}
	});

	// Anchor crossing
	const navLinks = document.querySelectorAll('.nav__link');
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', (e) => {
			document.body.style.overflow = 'auto';	
			setTimeout(() => {
				document.documentElement.style.scrollBehavior = 'smooth';	
			}, 1000);
		});
	});
});
