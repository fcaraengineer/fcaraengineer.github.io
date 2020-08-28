$(document).ready(function() {
    highlightPageName();
    resizePage();
    $(window).resize(function(){
        resizePage();
    });
});

function resizePage(){
    if ($(window).height() >= 790) {
        var windowHeight = $(window).height();
        var navbarHeight = $(".navbar").height();
        var finalPageHeight = windowHeight - navbarHeight;
        document.getElementById('page_content').style.height = finalPageHeight + "px";
    }
    else {
        document.getElementById('page_content').style.height = "auto";
    }
}

function highlightPageName(){
    var homeButton = document.getElementById("home_button");
    homeButton.classList.add('active');
}

