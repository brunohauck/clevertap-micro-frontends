/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

//var startPopUpFunctions = () => {
    console.log('popup')


    var btn = document.querySelector('.btn');
    var wrapper = window.parent.document.getElementById('wizParDiv0');
    btn.addEventListener('click', closePopUp);
    function closePopUp() { wrapper.remove(); }

    var btn = document.querySelector('.btn');
    var wrapper = window.parent.document.getElementById('wizParDiv2');
    btn.addEventListener('click', closePopUp);
    function closePopUp() { wrapper.remove(); }

    var btn = document.querySelector('.btn');
    var overlay = window.parent.document.getElementById('intentOpacityDiv');
    var wrapper = window.parent.document.getElementById('intentPreview');
    btn.addEventListener('click', closePopUp);
    function closePopUp() { overlay.remove(); wrapper.remove(); }

    window.addEventListener('DOMContentLoaded', event => {

        // Navbar shrink function
        var navbarShrink = function () {
            const navbarCollapsible = document.body.querySelector('#mainNav');
            if (!navbarCollapsible) {
                return;
            }
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink')
            } else {
                navbarCollapsible.classList.add('navbar-shrink')
            }
        };

        clevertap.event.push("Product Viewed Web - CT Poc", {
            "Product name":"Casio Chronograph Watch",
            "Category":"Mens Accessories",
            "Price":59.99,
          });   
    


        document.addEventListener('scroll', navbarShrink);

    
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                offset: 74,
            });
        };

        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });

    });
