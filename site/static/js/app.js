// JS Goes here - ES6 supported

// Say hello
console.log("🦊 Hello! Edit me in src/js/app.js");

// Add active class to current page link in nav
function navHighlight(elem, active) {
    var url = location.href.split("/");
    // Url[3] moves past https, empty space between //, and www.kattow.com
    var loc = url[3];
    // Link variable is anything on the page that matches the elem argument passed to the function
    var link = document.querySelectorAll(elem);
    // Loop through the nav links to see if the href matches the category in URL
    for (var i = 0; i < link.length; i++) {
        var
            path = link[i].href.split("/"),
            page = path[3];
        if (page == loc) {
            link[i].className += " " + active;
            document.body.className += " " + page.substr(0, page.lastIndexOf("."));
        }
    }
}
navHighlight("nav ul li a", "current-page"); /* menu link selector and highlight class */