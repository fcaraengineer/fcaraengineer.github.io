$(document).ready(function() {
    highlightPageName();
    resizePage();
    $(window).resize(function(){
        resizePage();
    });
});

function resizePage(){
    if ($(window).height() >= 460) {
        var windowHeight = $(window).height();
        var navbarHeight = $(".navbar").height();
        var finalPageHeight = windowHeight - navbarHeight - 10;
        document.getElementById('page_content').style.height = finalPageHeight + "px";
    }
    else {
        document.getElementById('page_content').style.height = "auto";
    }
}

function highlightPageName(){
    var homeButton = document.getElementById("contact_button");
    homeButton.classList.add('active');
}
