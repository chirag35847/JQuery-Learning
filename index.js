$("h1").css("color","red");

// document.querySelector(“h1”);    =    $(“h1”);
// document.querySelectorAll(“button”);    =    $(“button”);

// no difference between selecting one or selecting many

// We can get the current value of the property by using
// console.log$(“h1”).css(“color”);

// Adding a class from css to the page
// $(“h1”).addClass(“className”);
// Similarly removeclass
// $(“h1”).removeClass(“className”);

// Adding two classes
// $(“h1”).addClass(“firstClass secondClass”);

// Check if we already have a class
// $(“h1”).hasClass(“className”); Returns boolean value

// Manipulating text inside any element
// $(“h1”).text(“Bye”);  Now the text inside H1 is changed to Bye

// Adding HTML
// $(“button”).html(“<em>Don’t Click me</em>”);   Make the text italicized and change to dont click me

// Manipulating the attributes
// console.log($(“img”).attr(“src”));   This will console log the source of the image
// $(“a”).attr(“src”,”https://www.yahoo.com”);   This will change the src attribute in anchor tag to yahoo
// console.log($(“h1”).attr(“class”));   Print all the classes applied to h1 tag

// Adding eventListners 
// $(“h1”).click(function(){
// 	$(“h1”).css(“color”,”purple”);
// });
// This will change the color of h1 to purple when clicked

// $(“button”).click(function(){
// 	$(“h1”).css(“color”,”purple”);
// });
// Adds event Listener to all the buttons, now if any of the buttons are clicked than the h1 will change

// We can also add keyPress Listener
// $(“input”).keypress(function(event){
// 	console.log(event.key);
// });

// All in one - any event for JS
// $(“h1”).on(“mouseover”,function(){
// 	$(“h1”).css(“color”,”purple”);
// });
// $(“h1”).on(“click”,function(){
// 	$(“h1”).css(“color”,”purple”);
// });


// We Can also add HTML elements
// $(“h1”).before(“<button>NEW</button>”);
// $(“h1”).after(“<button>NEW</button>”);
// $(“h1”).prepend(“<button>NEW</button>”);  -- add to current element but before it
// $(“h1”).append(“<button>NEW</button>”);  --- add to current element but after it
// $(“button”).remove():  --- for removing all the buttons from the page

// $(“h1”).hide();   For hiding
// $(“h1”).show();   For showing the hidden element
// $(“h1”).toggle(); --- for toggling between show and hide
// $(“h1”).fadeout()  --- for hiding slowly
// $(“h1”).fadein();  --- for showing slowly
// $(“h1”).fadetoggle();
// $(“h1”).slideUp();
// $(“h1”).slideDown();
// $(“h1”).toggle();

// Custom animation
// $(“h1”).animate({opacity: 0.5});

// Chaining three methods together
// $(“h1”).hide().slideDown().animate({opacity: 0.5});


