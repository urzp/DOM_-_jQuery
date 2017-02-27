

    function clear_alle(){
        $('#container').children().remove()
    };

    function clear_main(){
        $('.mane').children().remove()
    };

    function set_stds_el(){
        $("#container").append("<div class='header'></div>");
        $("#container").append("<div class='mane'></div>");
        $("#container").append("<div class='footer'></div>");
        $(".header").append("<nav>");
        $("nav").append("<ul></ul>");
        $("nav ul").append("<li id='logo'><img src='img/logo.gif' alt='logo' style='width: 300px;'></li>");
        $("nav ul").append("<li><a href='#'>About US</a></li>");
        $("nav ul").append('<li><a href="#">our menu</a></li>');
        $("nav ul").append('<li><a href="#">news</a></li>');
        $("nav ul").append('<li><a href="#">contacts</a></li>');
    };

    function index_page(){
        clear_main();
        $(".mane").append("<h1>Welcome to us<h1>");
        $(".mane").append(' <img src="img/main.jpg" alt="restoran" > ');  
    };
    
     function about_us_page(){
        clear_main();
    };

     function our_meny_page(){
        clear_main();
    };

     function news_page_page(){
        clear_main();
    };

     function contacts_page(){
        clear_main();
    };



$(function(){
    set_stds_el();
    index_page(); 
    
    $('nav > ul > li:nth-child(1)').click( function(){index_page()});
    $('nav > ul > li:nth-child(2)').click( function(){about_us_page()});
    $('nav > ul > li:nth-child(3)').click( function(){our_meny_page()});
    $('nav > ul > li:nth-child(4)').click( function(){news_page_page()});
    $('nav > ul > li:nth-child(5)').click( function(){news_page_page()});

});




