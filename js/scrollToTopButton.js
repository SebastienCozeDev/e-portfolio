window.addEventListener("scroll", function() {
var scrollToTopButton = document.getElementById("scrollToTopButton");
if (window.pageYOffset > 0) {
    scrollToTopButton.classList.remove("is-hidden");
} else {
    scrollToTopButton.classList.add("is-hidden");
}
});

document.getElementById("scrollToTopButton").addEventListener("click", function() {
window.scrollTo({top: 0, behavior: "smooth"});
});