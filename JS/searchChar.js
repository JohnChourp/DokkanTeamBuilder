function searchTitlesOptionYes() {
	let buttonYes = document.getElementsByClassName("searchTitlesOptionYes").item(0);
	buttonYes.style.backgroundColor = "#33ccff";
	let buttonNo = document.getElementsByClassName("searchTitlesOptionNo").item(0);
	buttonNo.style.backgroundColor = "white";
	let characterSearchId = document.getElementById("char-search-id");
	characterSearchId.onkeyup = function(){searchCharTitle()};
}

function searchTitlesOptionNo() {
	let buttonNo = document.getElementsByClassName("searchTitlesOptionNo").item(0);
	buttonNo.style.backgroundColor = "#33ccff";
	let buttonYes = document.getElementsByClassName("searchTitlesOptionYes").item(0);
	buttonYes.style.backgroundColor = "white";
	let characterSearchId = document.getElementById("char-search-id");
	characterSearchId.onkeyup = function(){searchCharName()};
}

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

function searchCharTitle() {
	let dataCharTitle = 'data-char-title';
	let dataCharItems = document.querySelectorAll('[' + dataCharTitle + ']');
	let char = document.getElementsByClassName("char");
	let characterSearchId = document.getElementById("char-search-id");

	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}

	for (let i = 0; i < char.length; i++) {
		if (dataCharItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
			char.item(i).style.display = "inline-block";
		} else {
			char.item(i).style.display = "none";
		}
	}
}