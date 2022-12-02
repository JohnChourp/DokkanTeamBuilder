function searchCharName() {
	let dataCharName = 'data-char-name';
	let dataCharItems = document.querySelectorAll('[' + dataCharName + ']');
	let char = document.getElementsByClassName("char");
	let characterSearchId = document.getElementById("char-search-id");

	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}

	for (let i = 0; i < char.length; i++) {
		if (dataCharItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
			char.item(i).style.display = "inline-block";
		} else {
			char.item(i).style.display = "none";
		}
	}
}