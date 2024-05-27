/*----------------------------------------------
*
* [Main Scripts]
*
* Theme    : NEXGEN
* Version  : 1.0
* Author   : Codings
* Support  : codings.dev
* �������أ�http://www.bootstrapmb.com
----------------------------------------------*/

/*----------------------------------------------

[ALL CONTENTS]

1. Preloader
2. Responsive Menu
3. Navigation
4. Slides 
5. Particles
6. Progress Bar
7. Shuffle
8. Sign and Register Form
9. Simple Form
10. Recaptcha
11. Cookie Notice

----------------------------------------------*/

/*----------------------------------------------
1. Preloader
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    let preloader = $('.preloader');

    setTimeout(function() {
        preloader.addClass('ready');
        
    }, preloader.data('timeout'))
})

/*----------------------------------------------
2. Responsive Menu
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    function navResponsive() {

        let navbar = $('.navbar .items');
        let menu = $('#menu .items');

        menu.html('');
        navbar.clone().appendTo(menu);

        $('.menu .icon-arrow-right').removeClass('icon-arrow-right').addClass('icon-arrow-down');
    }

    navResponsive();

    $(window).on('resize', function () {
        navResponsive();
    })

    $('.menu .dropdown-menu').each(function() {
        var children = $(this).children('.dropdown').length;
        $(this).addClass('children-'+children);
    })

    
    $('.menu .nav-item.dropdown').each(function() {
        var children = $(this).children('.nav-link');
        children.addClass('prevent');
    })

    $(document).on('click', '#menu .nav-item .nav-link', function (e) {

        if($(this).hasClass('prevent')) {
            e.preventDefault();
        }

        var nav_link = $(this);

        nav_link.next().toggleClass('show');

        if(nav_link.hasClass('smooth-anchor')) {
            $('#menu').modal('hide');
        }
    })
})

/*----------------------------------------------
3. Navigation
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    var position = $(window).scrollTop();
    var navbar   = $('.navbar.sub');
    var toTop    = $('#scroll-to-top');

    $(document).ready(function() {
        if (position > 0) {
            navbar.addClass('navbar-sticky');
        }
        toTop.hide();
    })

    $(window).scroll(function () {

        navbar.removeAttr('data-aos');
        navbar.removeAttr('data-aos-delay');

        var scroll = $(window).scrollTop();

        if (!navbar.hasClass('relative')) {

            // Down
            if (scroll > position && position > 0) {

                navbar.addClass('navbar-sticky');

                if(navbar.hasClass('navbar-fixed') || window.innerWidth <= 767) {
                    navbar.removeClass('hidden').addClass('visible');

                } else {

                    if ($(window).scrollTop() >= window.innerHeight) {
                        navbar.removeClass('visible').addClass('hidden');
                    }
                }                

                toTop.fadeOut('fast');

            // Up
            } else {

                navbar.removeClass('hidden').addClass('visible');

                // Top
                if ($(window).scrollTop() <= 100) {
                    navbar.removeClass('navbar-sticky');

                } else {                   

                    if(!navbar.hasClass('navbar-no-fixed')) {
                        navbar.addClass('visible');
                    }
                }

                if (position >= window.innerHeight && window.innerWidth >= 767) {
                    toTop.fadeIn('fast');

                } else {
                    toTop.fadeOut('fast');
                }
            }
            position = scroll;
        }
    })

    $('.nav-link').each(function() {
        let href = $(this).attr('href');
        if (href.length > 1 && href.indexOf('#') != -1) {
            $(this).addClass('smooth-anchor');
        }
    })

    $('.nav-link').each(function() {

        if(this.hasAttribute('href')) {
            let href = $(this).attr('href');
            if (href.length > 1 && href.indexOf('#') != -1) {
                $(this).addClass('smooth-anchor');
            }
        }

        let body = $('body');

        if(this.hasAttribute('href') && ! body.hasClass('home')) {
            let href = $(this).attr('href');
            if (href.length > 1 && href.indexOf('#') != -1) {
                $(this).removeClass('smooth-anchor');
                $(this).attr('href', '/'+href);
            }
        }
    })

    $(document).on('click', '.smooth-anchor', function (e) {
        e.preventDefault();

        let href   = $(this).attr('href');
        let target = $.attr(this, 'href');

        if($(target).length > 0) {
        
            if (href.length > 1 && href.indexOf('#') != -1) {
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 500);
            }
        }
    })

    $('.dropdown-menu').each(function () {

        let dropdown = $(this);

        dropdown.hover(function () {
            dropdown.parent().find('.nav-link').first().addClass('active');

        }, function () {
            dropdown.parent().find('.nav-link').first().removeClass('active');
        })
    })

    let navbar_holder = $('.navbar-holder');
    let navbar_height = $('.navbar-expand.sub').outerHeight();

    if(navbar_holder.length > 0) {
        $('.navbar-holder').css('min-height', navbar_height);
    }
})

/*----------------------------------------------
4. Slides
----------------------------------------------*/

jQuery(function ($) {

    setTimeout(function() {
        $('.no-slider .left').addClass('init');
        $('.no-slider .right').addClass('init');
    }, 1200)

    var animation = function(slider) {

        let image = $(slider + ' .swiper-slide-active img');
        let title = $(slider + ' .title');
        let description = $(slider + ' .description');
        let btn = $(slider + ' .buttons');
        let nav = $(slider + ' nav');

        image.toggleClass('aos-animate');
        title.toggleClass('aos-animate');
        description.toggleClass('aos-animate');
        btn.toggleClass('aos-animate');
        nav.toggleClass('aos-animate');

        setTimeout(function() {
            image.toggleClass('aos-animate');
            title.toggleClass('aos-animate');
            description.toggleClass('aos-animate');
            btn.toggleClass('aos-animate');
            nav.toggleClass('aos-animate');

            AOS.refresh();

        }, 100)

        if ($('.full-slider').hasClass('animation')) {

            $('.full-slider .left').addClass('off');
            $('.full-slider .left').removeClass('init');
            $('.full-slider .right').addClass('off');
            $('.full-slider .right').removeClass('init');

            setTimeout(function() {
                $('.full-slider .left').removeClass('off');
                $('.full-slider .right').removeClass('off');
            }, 200)

            setTimeout(function() {
                $('.full-slider .left').addClass('init');
                $('.full-slider .right').addClass('init');
            }, 1000)

        } else {
            $('.full-slider .left').addClass('init');
            $('.full-slider .right').addClass('init');
        }
    }

    var fullSlider = new Swiper('.full-slider', {

        autoplay: {
            delay: 10000,
        },
        parallax: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: false,
        pagination: {
            el: '.full-slider .swiper-pagination',
            clickable: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },
        on: {
            init: function() {
                animation('.full-slider');
                let pagination = $('.full-slider .swiper-pagination');
                pagination.hide();

                setTimeout(function() {
                    pagination.fadeIn('slow');
                }, 3600)
            },
            slideChange: function() {
                animation('.full-slider');

                let title = $('.full-slider .title');
                let description = $('.full-slider .description');
                let btn = $('.full-slider .buttons');
                
                title.attr('data-aos-delay', 400);
                description.attr('data-aos-delay', 800);
                btn.attr('data-aos-delay', 1200);
            }
        }
    })

    $('.mid-slider').each(function() {

        if($(this).data('perview')) {
            var midPerView = $(this).data('perview');
        } else {
            var midPerView = 3;
        }

        var midSlider = new Swiper(this, {

            autoplay: false,
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1023: {
                    slidesPerView: midPerView,
                    spaceBetween: 30
                }
            }
        })
    })

    $('.min-slider').each(function() {

        if($(this).data('perview')) {
            var minPerView = $(this).data('perview');
        } else {
            var minPerView = 6;
        }

        var minSlider = new Swiper(this, {

            autoplay: {
                delay: 5000,
            },
            loop: false,
            centerInsufficientSlides: true,
            slidesPerView: 2,
            spaceBetween: 15,
            breakpoints: {
                424: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 15
                },
                1199: {
                    slidesPerView: minPerView,
                    spaceBetween: 15
                }
            },
            pagination: false
        })
    })

    var noSlider = new Swiper('.no-slider', {

        autoplay: false,
        loop: false,
        keyboard: false,
        grabCursor: false,
        allowTouchMove: false,
        on: {
            init: function() {
                animation('.no-slider')
            }
        }
    })
})

/*----------------------------------------------
5. Particles
----------------------------------------------*/

function particles(type, ID) {

    if(type === 'default') {
        particlesJS(ID,{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.25,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.25,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});
    }

    if(type === 'squares') {
        particlesJS(ID,{particles:{number:{value:20,density:{enable:!0,value_area:800}},color:{value:"#21333e"},shape:{type:"edge",stroke:{width:0,color:"#000"},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.15,random:!0,anim:{enable:!1,speed:1,opacity_min:.05,sync:!1}},size:{value:80,random:!1,anim:{enable:!0,speed:5,size_min:5,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})
    }

    if(type === 'bubble') {
        particlesJS(ID,{particles:{number:{value:6,density:{enable:!0,value_area:800}},color:{value:"#182c50"},shape:{type:"polygon",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:160,random:!1,anim:{enable:!0,speed:10,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:8,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});
    }

    if(type === 'space') {
        particlesJS(ID,{particles:{number:{value:160,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});
    }
}

/*----------------------------------------------
6. Progress Bar
----------------------------------------------*/

jQuery(function($) {

    'use strict';

    function initCounter(section, item, duration) {

        $(document).one('inview', item, function(event, inview) {

            if (inview) {            
    
                $(item).each(function() {
    
                    var percent = $(this).data('percent');
                    var pcolor  = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
                    var scolor  = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    
                    if ( $(section).hasClass('odd')) {
                        var tmode = 'rgba(255, 255, 255, 0.075)';
                    } else {
                        var tmode = 'rgba(0, 0, 0, 0.075)';
                    }
    
                    if ( $(section).hasClass('preloader') || $(section).hasClass('skills')) {
                        var symbol = '<i>%</i>';
                    } else {
                        var symbol = '';
                    }

                    if(section == '.counter.preloader' || section == '.counter.funfacts') {
                        var height = 70;
                    } else {
                        var height = 110;
                    }
    
                    $(this).radialProgress({
                        value: (percent / 100),
                        size: height,
                        thickness: 10,
                        lineCap: 'butt',
                        emptyFill: tmode,
                        animation: { 
                            duration: duration, 
                            easing: "radialProgressEasing" 
                        },
                        fill: {
                            gradient: [[pcolor, 0.1], [scolor, 1]], 
                            gradientAngle: Math.PI / 4
                        }
                    }).on('radial-animation-progress', function(event, progress) {
                        $(this).find('span').html(Math.round(percent * progress) + symbol);
                    })
                })
            }
        })
    }
    
    let preloader = $('.preloader');
    let preloader_timeout = ( preloader.data('timeout') - 800);

    initCounter('.counter.preloader', '.counter.preloader .radial', preloader_timeout);
    initCounter('.counter.funfacts', '.counter.funfacts .radial', 5000);
    initCounter('.counter.skills', '.counter.skills .radial', 5000);
})

/*----------------------------------------------
7. Shuffle
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    $('.filter-section').each(function(index) {

        var count = index + 1;

        $(this).find('.filter-items').removeClass('filter-items').addClass('filter-items-'+count);
        $(this).find('.filter-item').removeClass('filter-item').addClass('filter-item-'+count);
        $(this).find('.filter-sizer').removeClass('filter-sizer').addClass('filter-sizer-'+count);
        $(this).find('.btn-filter-item').removeClass('btn-filter-item').addClass('btn-filter-item-'+count);
        
        var Shuffle = window.Shuffle;
        var Filter  = new Shuffle(document.querySelector('.filter-items-'+count), {
            itemSelector: '.filter-item-'+count,
            sizer: '.filter-sizer-'+count,
            buffer: 1,
        })
    
        $('.btn-filter-item-'+count).on('change', function (e) {
    
            var input = e.currentTarget;
            
            if (input.checked) {
                Filter.filter(input.value);
            }
        })
    })
})

/*----------------------------------------------
8. Sign and Register Form
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    $(document).on('click', 'a[data-target="#register"]', function() { 
        $('#sign').modal('hide');
    })

    $(document).on('click', 'a[data-target="#sign"]', function() { 
        $('#register').modal('hide');
    })

})

/*----------------------------------------------
9. Simple Form
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    function sendForm(ID) {

        var form  = $(ID);
        var input = $(ID+' .form-control')
        var btn   = $(ID+' .btn:first-child');
        var alert = $(ID+' .form-alert');

        alert.hide();

        $(document).on('click', ID+' .btn:first-child', function() {
            $(this).addClass('effect-motion-bg');
            form.submit();
        })

        form.submit(function(e) {
            e.preventDefault();

            if ($('input[name="reCAPTCHA"]').length) {
                let reCAPTCHA = $('input[name="reCAPTCHA"]');
    
                grecaptcha.ready(function() {
                    grecaptcha.execute(reCAPTCHA.data('key'), { action: "create_comment" }).then(function(token) { 
                        reCAPTCHA.val(token); 
                    }) 
                })
            }

            var url = form.attr('action');

            $.ajax({
                type: 'POST',
                url: url,
                data: form.serialize(),
                success: function(response) {                    

                    try {
                        JSON.parse(response);
                        var obj = JSON.parse(response);

                        if (obj.status == 'success') {
                            setTimeout(function() {
                                btn.removeClass('effect-motion-bg');
                                input.val('').removeClass('invalid').removeClass('valid');
                                alert.text(obj.info).removeClass('invalid').addClass('valid').fadeIn();
                            }, 1200);

                        } else if(obj.status == 'invalid') {
                            setTimeout(function() {
                                btn.removeClass('effect-motion-bg');
                                alert.text(obj.info).removeClass('valid').addClass('invalid').fadeIn();
                            }, 1200);

                            input.each(function() {
                                let input_name = $(this).attr('name');                     

                                if(obj.fields[input_name] == true) {
                                    $(ID+' .field-'+input_name).removeClass('valid').addClass('invalid'); 
                                } else { 
                                    $(ID+' .field-'+input_name).removeClass('invalid').addClass('valid');
                                }
                            })
                        } else {
                            btn.removeClass('effect-motion-bg');
                            input.val('').removeClass('invalid').removeClass('valid');
                            alert.text(obj.info).removeClass('valid').addClass('invalid').fadeIn();                        
                        
                        } 

                    } catch (e) {
                        btn.removeClass('effect-motion-bg');
                        input.val('').removeClass('invalid').removeClass('valid');
                        alert.text('Sorry. We were unable to send your message.').removeClass('valid').addClass('invalid').fadeIn();
                    }
                }
            })
        })
    }

    sendForm('#nexgen-simple-form');
    sendForm('#nexgen-subscribe');
})

/*----------------------------------------------
10. Recaptcha
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    if ($('input[name="reCAPTCHA"]').length) {

     let siteKey = "6Lf-NwEVAAAAAPo_wwOYxFW18D9_EKvwxJxeyUx7"; // Put your site key here
     
     if(siteKey) { 
         $('input[name="reCAPTCHA"]').attr("data-key", siteKey); 
         grecaptcha.ready(function() { 
             grecaptcha.execute(siteKey, { action: "create_comment" }).then(function(token) { 
                 $('input[name="reCAPTCHA"]').val(token); 
                }) 
            }) 
        } 
    }
})

/*----------------------------------------------
11. Cookie Notice
----------------------------------------------*/

jQuery(function ($) {

    'use strict';

    let cookieNotice = true;

    if(cookieNotice) {

        // Translate
        gdprCookieNoticeLocales.en = {
            description: 'We use cookies to offer you a better browsing experience, personalise content and ads, to provide social media features and to analyse our traffic. Read about how we use cookies and how you can control them by clicking Cookie Settings. You consent to our cookies if you continue to use this website.',
            settings: 'Cookie settings',
            accept: 'Accept cookies',
            statement: 'Our cookie statement',
            save: 'Save settings',
            always_on: 'Always on',
            cookie_essential_title: 'Essential website cookies',
            cookie_essential_desc: 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
            cookie_performance_title: 'Performance cookies',
            cookie_performance_desc: 'These cookies are used to enhance the performance and functionality of our websites but are non-essential to their use. For example it stores your preferred language or the region that you are in.',
            cookie_analytics_title: 'Analytics cookies',
            cookie_analytics_desc: 'We use analytics cookies to help us measure how users interact with website content, which helps us customize our websites and application for you in order to enhance your experience.',
            cookie_marketing_title: 'Marketing cookies',
            cookie_marketing_desc: 'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.'
        }

        gdprCookieNotice({
            locale: 'en', // This is the default value
            timeout: 2000, // Time until the cookie bar appears
            expiration: 30, // This is the default value, in days
            domain: window.location.hostname, // If you run the same cookie notice on all subdomains, define the main domain starting with a .
            implicit: true, // Accept cookies on page scroll automatically
            statement: 'https://nexgen.codings.dev', // Link to your cookie statement page
            performance: ['JSESSIONID'], // Cookies in the performance category.
            analytics: ['ga'], // Cookies in the analytics category.
            marketing: ['SSID'] // Cookies in the marketing category.
        })
    }
})