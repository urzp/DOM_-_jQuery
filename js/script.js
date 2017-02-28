
    const about_p = '<p>The year was 1997. The place, a little town in southern Utah called St. George. A lovely couple named Steve and Patricia Stanley started a restaurant called Cafe Rio Mexican Grill. Cafe Rio served authentic dishes derived from inspired recipes and traditional cooking of Northern Mexico’s Rio Grande region, Southern Texas, and New Mexico. Central to every bite was the belief that every ingredient must be fresh and made fresh to order. And you know what? People loved it. They couldn’t get enough of it. So much so, that one restaurant became six. In 2004, these six little restaurants caught the attention of a fine gentleman named Bob Nilsen. He purchased Cafe Rio from the Stanleys with the idea of spreading the love of making this fresh Mexican food to everyone in and around Utah and beyond. He made sure to keep the mantra of “fresh food, made fresh” at the very core of the brand. No freezers. No microwaves. Nothing premade. Our staff begins each day, bright and early, hand-squeezing limes, hand-scooping avocados, simmering sauces and preparing desserts. The crowds that line up at our eighty-five Cafe Rio locations today aren’t the only ones to take notice. We’ve won over 100 awards, from the Best of City Search and the Oxnard Salsa Festival to the Inc. 500 and the Alfred P. Sloan Award. And you know what else? We’re just getting started.</p>'
    
    
    const news_1_title ="CoreLife Eatery grows ‘whole, clean food’ concept"
    const news_1_date ="11/02/2017"
    const news_1_content ='<img src="http://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/corelifesalad.jpg " width="300px" alt=""> CoreLife Eatery, a fast-casual chain offering affordable and healthful items, such as bone broths and grain bowls, is planning aggressive growth. The eight-unit concept expects to open 300 corporate and franchised restaurants over the next five years, with 15 corporate units and seven franchised locations slated for this year, and 40 planned for next year, Todd Mansfield, co-owner and chief culture officer for the brand, told Restaurant Hospitality on Tuesday. Syracuse, N.Y.-based private investment company Tristar Capital has signed on to open at least three units in 2016, two of them in Kentucky and one in Ohio, according to a press release in February. The focus of the fast-casual brand, which Tristar Capital principal Jacqueline Mansfield compares to Chipotle Mexican Grill or Panera Bread in price point, is “whole, clean food.” Customers can choose from curated bowls, such as Sriracha Ginger Tofu with quinoa, or the popular Southwest Grilled Chicken on wild rice, or to build their own. A choice between bases (a grain such as quinoa, or dark, leafy greens) and four vegetable additions is priced at $5.99. Curated bowls with tofu start at $7.95. All options with chicken or steak are just under $9.Bringing food to consumers that will actually make them healthier at an affordable price is how CoreLife sees its best impact, said Mansfield, who has a decades-long background in healthcare. As part of embracing an active lifestyle and food options that make it possible to run a marathon or go for a hike, the eatery does not currently offer dessert. For sweets, customers can turn to artisanal drinks, like lemonades in flavors such as beet and cucumber basil, and an apple cider green tea.'
    
    const news_2_title ="Selling the story of underutilized fish"
    const news_2_date ="10/01/2017"
    const news_2_content ='  <img src="http://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_standard/public/dogfish-sea-to-table-promo.jpg?itok=sAZaTy0g" alt=""> Storytelling is a vital part of getting underutilized fish onto more menus. Increasing consumption of underutilized fish is good not only for the oceans and the planet, but for restaurant operators and the fishing industry alike. Travis Riggs is supply manager at Sea to Table, an organization that connects restaurants and college dining operations to fishermen. His job entails talking to fishermen, hearing what’s going on at the docks, then going into kitchens and sharing that story with chefs. Take the case of the mullet, which is prized for its roe, called bottarga. “Bottarga’s a very big thing in Europe,” Riggs said. “One ounce could go for $80. There’s not a lot of fish left in the Mediterranean, and we have a sustainable mullet population in the U.S. South.” Female mullets are valued for their bottarga, which is exported to Europe at high prices. The male mullets are bycatch. Sometimes they are dumped back into the water, with  thousands washing up on Florida’s shore. “The market demands this product, but wouldn’t take the other side of it, the males,” Riggs said. “It’s all about market demand.”At Olmsted, a hot restaurant in Brooklyn, N.Y., chef Greg Baxtrom is making mullet cool for perhaps the first time. He seeks out male mullets and creates dishes like mullet tartare with cranberry chimichurri, juniper-berry labneh and lavash crackers.'
    
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
        $(".mane").append(' <img class="home" src="img/main.jpg" alt="restoran" > ');  
    };
    
     function about_us_page(){
        clear_main();
        $(".mane").append('<h1>About US</h1>');
        $(".mane").append(about_p); 
    };

     function our_meny_page(){
        clear_main();
        $(".mane").append('<h1>Our Menu</h1>');
        $(".mane").append('<div class="menu">'); 
        $(".menu").append('<div ><img src="img/menu1.jpg" alt="memu1"></div>'); 
        $(".menu").append('<div ><img src="img/menu2.jpg" alt="memu2"></div>'); 
        $(".menu").append('<div ><img src="img/menu3.jpg" alt="memu3"></div>'); 
    };

     function news_page_page(){
        clear_main();
        $(".mane").append('<h1>NEWS</h1> ');
        $(".mane").append('<div class="news">');  
        news_block(news_1_title,news_1_date,news_1_content); 
        news_block(news_2_title,news_2_date,news_2_content); 
    };

    function news_block(title,date,content){
        $(".news").append('<div>');
        $(".news>div:first").append('<h2>' + title + '<h2>');
        $(".news>div:first").append('<h5>' + date + '<h5>');
        $(".news>div:first").append('<p>' + content + '<p>');
    }

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



