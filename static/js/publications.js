$(document).ready(function() {
    highlightPageName();
    resizePage();
    $(window).resize(function(){
        resizePage();
    });
});

function resizePage(){
    var pageHeight = document.getElementById('page_content').offsetHeight;
    var navbarHeight = $(".navbar").height() + 10;
    var pageContentHeight = pageHeight + navbarHeight;
    var windowHeight = $(window).height();
    if (windowHeight >= pageContentHeight) {
        var finalPageHeight = windowHeight - navbarHeight;
        document.getElementById('page_content').style.height = finalPageHeight + "px";
    }
    else {
        document.getElementById('page_content').style.height = "auto";
    }
}

function highlightPageName(){
    var homeButton = document.getElementById("publication_button");
    homeButton.classList.add('active');
}