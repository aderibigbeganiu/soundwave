function navToggle(x) {
	x.classList.toggle("change");
	const drpdwn = document.getElementById("dropdown-content");
	drpdwn.style.display === "block"
		? (drpdwn.style.display = "")
		: (drpdwn.style.display = "block");
}
