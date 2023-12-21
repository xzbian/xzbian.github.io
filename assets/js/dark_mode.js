<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("light-toggle");

    mode_toggle.addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"));
    });
});

=======
document.addEventListener("DOMContentLoaded",function(){document.getElementById("light-toggle").addEventListener("click",function(){toggleTheme(localStorage.getItem("theme"))})});
>>>>>>> origin/gh-pages
