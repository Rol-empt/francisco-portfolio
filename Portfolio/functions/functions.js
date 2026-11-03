
// NAVIGATION MENU

const menu_toggle = document.getElementById("menu_toggle");
const nav_links = document.getElementById("nav_links");


// Open and close the menu
menu_toggle.addEventListener("click", function() {

    nav_links.classList.toggle("active");

    const is_open = nav_links.classList.contains("active");

    menu_toggle.setAttribute("aria-expanded", is_open);

    menu_toggle.innerHTML = is_open ? "✕" : "☰";

});


// Close the menu after clicking a navigation link
const navigation_links = nav_links.querySelectorAll("a");

navigation_links.forEach(function(link) {

    link.addEventListener("click", function() {

        nav_links.classList.remove("active");

        menu_toggle.setAttribute("aria-expanded", "false");

        menu_toggle.innerHTML = "☰";

    });

});
