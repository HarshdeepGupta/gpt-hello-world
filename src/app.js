// Hide/show banner on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.querySelector(".banner").style.top = "0";
	} else {
		document.querySelector(".banner").style.top = "-200px";
	}
	prevScrollpos = currentScrollPos;
};