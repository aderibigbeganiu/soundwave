function navToggle(x) {
	x.classList.toggle("change");
	document.getElementById("dropdown-content").style.display === "block"
		? (document.getElementById("dropdown-content").style.display = "none")
		: (document.getElementById("dropdown-content").style.display = "block");
}
