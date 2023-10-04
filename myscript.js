// JavaScript
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;


function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if (rootElement.scrollTop / scrollTotal > 0.5) {
        // Show button
        scrollToTopBtn.classList.add("showBtn");
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn");
    }
}


function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


$(".show-more a").on("click", function() {
    var $this = $(this);
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();

    if (linkText === "SHOW MORE") {
        linkText = "Show less";
        $content.switchClass("desc-project", "showContent", 400);
    } else {
        linkText = "Show more";
        $content.switchClass("showContent", "desc-project", 400);
    };

$this.text(linkText);
});


// JQuery
$(".fe-btn").on('click', function() {
    $(".custom-model-fe").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-fe").removeClass('model-open');
});


$(".ne-btn").on('click', function() {
    $(".custom-model-ne").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-ne").removeClass('model-open');
});


$(".ui-btn").on('click', function() {
    $(".custom-model-ui").addClass('model-open');
}); 

$(".close-btn, .bg-overlay").click(function(){
    $(".custom-model-ui").removeClass('model-open');
});
