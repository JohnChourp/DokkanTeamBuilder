function showInfo() {
	let char = document.getElementsByClassName("char");
	for (i = 0; i < char.length; i++) {
		char.item(i).addEventListener("click", function (event) {
			openNavRight();
		});
	}
}