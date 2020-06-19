$(document).ready(function () {
    const mMenuButton = $('.m-menu-button');
    const searchButton = $('.search-button');
    const mMenu = $('.m-menu');
    const inputSearch = $('.input-search');
    const tab = $('.tab')

    mMenuButton.on('click', function() {
        mMenu.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    searchButton.on('click', function() {
        mMenu.toggleClass('active');
        inputSearch.focus();
        $('body').toggleClass('no-scroll');
    });

    tab.on('click', function () {
        tab.removeClass('active');
        $(this).toggleClass('active');
        let activeTabContent = $(this).attr('data-target');
        $('.tabs-content').removeClass('visible');
        $(activeTabContent).toggleClass('visible');
    });

    let mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            991: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1,
                slidesOffsetAfter: 50,
                navigation: {
                    nextEl: '.button-next'
                }
            }
        }
    })
});