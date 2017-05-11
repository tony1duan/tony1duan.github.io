$(document).ready(function()
{
    var nav = $('nav.navbar');
    var mainPosition = $('main').position().top;
    var homeLink = $('.home');
    var projectLink = $('.project-link');
    var navbarshrunk = $('.navbar-shrunk');
    var navmenuToggler = $('.ham');
    var navmenu = $('.collapsed-items');
    var navBottom;

    init(nav);
    
    $(window).scroll(function()
    {
        shrinkNavBar(navbarshrunk, navBottom);
        underlineMenu(navbarshrunk, projectLink, mainPosition);
    });

    $(window).resize(function()
    {
        init(nav);
        shrinkNavBar(navbarshrunk, navBottom);
    });

    function init(nav)
    {
        if(nav.css('display') == 'none')
        {
            navbarshrunk.removeClass('hide');
            navBottom = 0;
        }
        else
        {
            navbarshrunk.addClass('hide');
            navBottom = nav.position().top + nav.outerHeight(true);
        }
    }


    function shrinkNavBar(navbarshrunk, navBottom)
    {

        if(navbarshrunk.hasClass('hide') && $(document).scrollTop() >= navBottom)
        {
            navbarshrunk.removeClass('hide');
        }
        else if(!navbarshrunk.hasClass('hide') && $(document).scrollTop() < navBottom)
        {
            navbarshrunk.addClass('hide');
        }
    }
    
    function underlineMenu(navbarshrunk, projectLink, mainPosition)
    {
        if (!navbarshrunk.hasClass('hide') && !projectLink.hasClass('active-nav') && $(document).scrollTop() > mainPosition)
        {
            projectLink.addClass('active-nav');
            homeLink.removeClass('active-nav');
        }
        else if (!navbarshrunk.hasClass('hide') && !homeLink.hasClass('active-nav') && $(document).scrollTop() < mainPosition)
        {
            projectLink.removeClass('active-nav');
            homeLink.addClass('active-nav');
        }
    }    

    navmenuToggler.click(function()
    {
        if (navmenu.css('display') == 'none')
        {
            navmenu.css('display','');
        }
        else
        {
            navmenu.css('display','none');
        }
    });
});