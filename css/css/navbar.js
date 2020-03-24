function toggleNav() {
	var x = document.getElementById("nav");
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

// Remember to add the attribute onresize="fixNav()" to the
// <body> tag of every layout you add to the _layouts directory.
function fixNav() {
	var x = document.getElementById("nav");
	var y = window.innerWidth;
	if (y < 768) {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}