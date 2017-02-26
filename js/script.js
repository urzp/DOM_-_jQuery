$(function(){
    
    $("#container").append("<div class='header'></div>");
    $("#container").append("<div class='mane'></div>");
    $("#container").append("<div class='footer'></div>");
    $(".header").append("<nav>");
    $("nav").append("<ul></ul>");
    $("nav ul").append("<li id='logo'><img src='http://www.logowiks.com/wp-content/uploads/2017/01/best-restaurant-logo-design-7.gif' alt='logo' style='width: 300px;'></li>");
    $("nav ul").append("<li><a href='#'>About US</a></li>");
    $("nav ul").append('<li><a href="#">our meny</a></li>');
    $("nav ul").append('<li><a href="#">news</a></li>');
    $("nav ul").append('<li><a href="#">contacts</a></li>');
    $(".header").append("<h1>Welcome to us<h1>");
    $(".mane").append(' <img src="http://helphome.ru/wp-content/uploads/2014/08/gusto-02.jpg" alt="restoran" > ');
    
});




