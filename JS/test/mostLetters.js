function mostLetterInNames() {
	let char = document.getElementsByClassName("char");
	let charList = [], maxLettersNamesLength = 0,maxLettersNames;
	let dataCharNames = 'data-char-name';
	for (let i = 0; i < char.length; i++) {
		charList[i] = char.item(i).getAttribute(dataCharNames).split(",");
	}

	for (let i = 0; i < char.length; i++) {
		for (let j = 0; j < charList[i].length; j++) {
			if (charList[i][j].length > maxLettersNamesLength) {
				maxLettersNamesLength = charList[i][j].length;
				maxLettersNames = charList[i][j];
			}
		}
	}
	console.log(maxLettersNamesLength);
	console.log(maxLettersNames);
}

function mostLetterInLinks() {
	let char = document.getElementsByClassName("char");
	let charList = [], maxLettersLinksLength = 0,maxLettersLinks;
	let dataCharLinks = 'data-char-links';
	for (let i = 0; i < char.length; i++) {
		charList[i] = char.item(i).getAttribute(dataCharLinks).split(",");
	}

	for (let i = 0; i < char.length; i++) {
		for (let j = 0; j < charList[i].length; j++) {
			if (charList[i][j].length > maxLettersLinksLength) {
				maxLettersLinksLength = charList[i][j].length;
				maxLettersLinks = charList[i][j];
			}
		}
	}
	console.log(maxLettersLinksLength);
	console.log(maxLettersLinks);
}

function mostLetterInCategories() {
	let char = document.getElementsByClassName("char");
	let charList = [], maxLettersCategoriesLength = 0,maxLettersCategories;
	let dataCharCategories = 'data-char-categories';
	for (let i = 0; i < char.length; i++) {
		charList[i] = char.item(i).getAttribute(dataCharCategories).split(",");
	}

	for (let i = 0; i < char.length; i++) {
		for (let j = 0; j < charList[i].length; j++) {
			if (charList[i][j].length > maxLettersCategoriesLength) {
				maxLettersCategoriesLength = charList[i][j].length;
				maxLettersCategories = charList[i][j];
			}
		}
	}
	console.log(maxLettersCategoriesLength);
	console.log(maxLettersCategories);
}
