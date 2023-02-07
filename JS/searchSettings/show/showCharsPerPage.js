function charsPerPageInput(charsPerPageNum) {
	let charsPerPageInputEventCompleted = localStorage.getItem("charsPerPageInputEventCompleted");
	console.log(charsPerPageInputEventCompleted);
	if (charsPerPageInputEventCompleted == null) {
		window.addEventListener("unload",function(){
			localStorage.removeItem("charsPerPageInputEventCompleted");
		});
		let charsPerPageIdTypeBox = document.getElementById("characters-per-input-page-id");
		let charsPerPage_class = document.getElementsByClassName("charsPerPage");
		localStorage.setItem("charsPerPageNumItem", charsPerPageNum);
		charsPerPageIdTypeBox.addEventListener("keypress", function (event) {
			if (event.key === "Enter") {
				if (charsPerPageIdTypeBox.value.length > 0) {
					localStorage.setItem("charsPerPageNumItem", charsPerPageIdTypeBox.value);
					for (let i = 0; i < charsPerPage_class.length; i++) {
						charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
					}
					applyFilters();
				}
			}
		});
		localStorage.setItem("charsPerPageInputEventCompleted",1);
	}
}

function charsPerPage(charsPerPageBtn) {
	let charsPerPage_class = document.getElementsByClassName("charsPerPage");
	let charsPerPageNum = Math.pow(2, charsPerPageBtn) * 16;

	charsPerPage_class.item(charsPerPageBtn).classList.add("checkedCharsPerPageBtn");
	localStorage.setItem("charsPerPageNumItem", charsPerPageNum);
	for (let i = 0; i < charsPerPage_class.length; i++) {
		if (i != charsPerPageBtn) {
			charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
		}
	}
	applyFilters();
}