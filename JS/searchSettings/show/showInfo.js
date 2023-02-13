function showInfo() {
	let charDiv = document.getElementsByClassName("char-div-class");
	for (i = 0; i < charDiv.length; i++) {
		charDiv.item(i).addEventListener("click", function () {
			openNavRight();
		});
	}
}