
    const about_p = '<p>The year was 1997. The place, a little town in southern Utah called St. George. A lovely couple named Steve and Patricia Stanley started a restaurant called Cafe Rio Mexican Grill. Cafe Rio served authentic dishes derived from inspired recipes and traditional cooking of Northern Mexico’s Rio Grande region, Southern Texas, and New Mexico. Central to every bite was the belief that every ingredient must be fresh and made fresh to order. And you know what? People loved it. They couldn’t get enough of it. So much so, that one restaurant became six. In 2004, these six little restaurants caught the attention of a fine gentleman named Bob Nilsen. He purchased Cafe Rio from the Stanleys with the idea of spreading the love of making this fresh Mexican food to everyone in and around Utah and beyond. He made sure to keep the mantra of “fresh food, made fresh” at the very core of the brand. No freezers. No microwaves. Nothing premade. Our staff begins each day, bright and early, hand-squeezing limes, hand-scooping avocados, simmering sauces and preparing desserts. The crowds that line up at our eighty-five Cafe Rio locations today aren’t the only ones to take notice. We’ve won over 100 awards, from the Best of City Search and the Oxnard Salsa Festival to the Inc. 500 and the Alfred P. Sloan Award. And you know what else? We’re just getting started.</p>'
    
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
        $(".mane").append('<h1>About US</h1>');
        $(".mane").append(about_p); 
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




