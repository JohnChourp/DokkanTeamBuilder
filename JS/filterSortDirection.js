function addSortDirectionOptionStyleColorBtn(){
	let buttonDown = document.getElementsByClassName("searchSortDirectionOptionDown").item(0);
	let buttonUp = document.getElementsByClassName("searchSortDirectionOptionUp").item(0);
	buttonDown.style.backgroundColor = "white";
	buttonUp.style.backgroundColor = "#33ccff";
}

function searchSortDirectionOptionDown() {
	let buttonDown = document.getElementsByClassName("searchSortDirectionOptionDown").item(0);
	let buttonUp = document.getElementsByClassName("searchSortDirectionOptionUp").item(0);

	if (buttonDown.style.backgroundColor == "white") {
		let char_container = document.getElementsByClassName("char_container");
		let char = document.getElementsByClassName("char");
		let temp_char = [];
		let charLength = char.length;
		for (let i = 0; i < charLength; i++) {
			temp_char[i] = char.item(i);
		}
		char_container.item(0).innerHTML = "";
		decrease_char_length = charLength - 1;
		for (let i = 0; i < charLength; i++) {
			char_container.item(0).appendChild(temp_char[decrease_char_length]);
			decrease_char_length = decrease_char_length - 1;
		}

	}

	buttonDown.style.backgroundColor = "#33ccff";
	buttonUp.style.backgroundColor = "white";
}

function searchSortDirectionOptionUp() {
	let buttonUp = document.getElementsByClassName("searchSortDirectionOptionUp").item(0);
	let buttonDown = document.getElementsByClassName("searchSortDirectionOptionDown").item(0);

	if (buttonUp.style.backgroundColor == "white") {
		let char_container = document.getElementsByClassName("char_container");
		let char = document.getElementsByClassName("char");
		let temp_char = [];
		let charLength = char.length;
		for (let i = 0; i < charLength; i++) {
			temp_char[i] = char.item(i);
		}
		char_container.item(0).innerHTML = "";
		decrease_char_length = charLength - 1;
		for (let i = 0; i < charLength; i++) {
			char_container.item(0).appendChild(temp_char[decrease_char_length]);
			decrease_char_length = decrease_char_length - 1;
		}
	}

	buttonUp.style.backgroundColor = "#33ccff";
	buttonDown.style.backgroundColor = "white";
}