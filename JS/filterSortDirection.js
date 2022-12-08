function searchSortOptionDown() {
	let buttonDown = document.getElementsByClassName("searchSortOptionDown").item(0);
	buttonDown.style.backgroundColor = "#33ccff";
    let buttonUp = document.getElementsByClassName("searchSortOptionUp").item(0);
	buttonUp.style.backgroundColor = "white";
	filterSortDirectionDown();
}

function searchSortOptionUp() {
	let buttonUp = document.getElementsByClassName("searchSortOptionUp").item(0);
	buttonUp.style.backgroundColor = "#33ccff";
	let buttonDown = document.getElementsByClassName("searchSortOptionDown").item(0);
	buttonDown.style.backgroundColor = "white";
    filterSortDirectionUp();
}

function filterSortDirectionDown(){
    
}

function filterSortDirectionUp(){
    
}