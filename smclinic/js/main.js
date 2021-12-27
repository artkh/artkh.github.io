document.addEventListener('DOMContentLoaded', function() {
	//work banner
	let scrollBaner = scroll_banner;

  window.addEventListener('scroll', function(){

    let bottomPointBannerOnPage = document.body.querySelector('.banner').getBoundingClientRect().bottom;
    
		if(bottomPointBannerOnPage <= 0) {
			scrollBaner.classList.add('active');
			scrollBaner.classList.add('animate__slideInUp');
		} else {
			scrollBaner.classList.remove('active');
			scrollBaner.classList.remove('animate__slideInUp');
		}

  });
	//work banner END

	//work nav
	let navLink = nav.querySelectorAll('.category');

	let showDropDownMenu = function () {
		for (let i = 0; i < navLink.length; i++) {
			navLink[i].addEventListener('mouseenter', function() {
				if(this.querySelector('.dropdown__menu')) {
					this.querySelector('.dropdown__menu').classList.add('active');
					this.querySelector('.first_link').style.borderRadius = `10px 10px 0 0`;
				}
			})

			navLink[i].addEventListener('mouseleave', function() {
				if(this.querySelector('.dropdown__menu')) {
					this.querySelector('.dropdown__menu').classList.remove('active');
					this.querySelector('.first_link').style = '';
				}
			})
		}

		//open and close navMenu in mobile devices
		let buttonOpenNav = document.querySelector('.open_close_nav');
		buttonOpenNav.addEventListener('click', function() {
			buttonOpenNav.classList.toggle('close');
			if(buttonOpenNav.classList.contains('close')) {
				document.body.classList.add('overflow-hidden');
			} else {
				document.body.classList.remove('overflow-hidden');
			}
		})
	}

	if(navLink) {
		showDropDownMenu();
	}
	//work nav END

	//floating menu
	let wrapMenu = document.body.querySelector('.wrapper__motion_menu');
	let navMenu = wrapMenu.querySelector('.motion_menu');

	window.addEventListener('scroll', function() {
		let bottomPointWrapMenu = wrapMenu.getBoundingClientRect().bottom;
		let heightWrapMenu = wrapMenu.getBoundingClientRect().height;
		
		if(bottomPointWrapMenu <= 0) {
			wrapMenu.classList.add('scroll');
			navMenu.classList.add('animate__slideInDown');
			wrapMenu.style.height = heightWrapMenu + 'px';
		} else {
			wrapMenu.classList.remove('scroll');
			navMenu.classList.remove('animate__slideInDown');
			wrapMenu.style.height = '';
		}
	})
	//floating menu END

});