function searchCharacter(){
	let dataChar = 'data-char';
	let dataCharItems = document.querySelectorAll('[' + dataChar + ']');
	let char = document.getElementsByClassName("char");
	let characterSearchId = document.getElementById("character-search-id");
	
	for(let i = 0; i < char.length; i ++){
		char.item(i).style.display = "none";
	}
	
	for(let i = 0; i < char.length; i ++){
		if(dataCharItems[i].getAttribute(dataChar).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0){
			char.item(i).style.display = "inline-block";
		}else{
			char.item(i).style.display = "none";
		}
	}
}