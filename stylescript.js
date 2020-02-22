function toggleNav() {
	var x = document.getElementById("nav");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

function fixNav() {
	var x = document.getElementById("nav");
	var y = window.innerWidth;
	if (y < 770) {
		if (x.style.display === "none" || x.style.display === "flex") {
			x.style.display = "none";
		}
	} else {
		if (x.style.display != "flex") {
			x.style.display = "flex";
		}
	}
}
