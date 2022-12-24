function searchTitlesOptionYes() {
	let buttonYes = document.getElementsByClassName("searchTitlesOptionYes").item(0);
	buttonYes.style.backgroundColor = "#33ccff";
	let buttonNo = document.getElementsByClassName("searchTitlesOptionNo").item(0);
	buttonNo.style.backgroundColor = "white";
	let characterSearchId = document.getElementById("char-search-id");
	characterSearchId.onkeyup = function () { searchCharTitle() };
}
function searchTitlesOptionNo() {
	let buttonNo = document.getElementsByClassName("searchTitlesOptionNo").item(0);
	buttonNo.style.backgroundColor = "#33ccff";
	let buttonYes = document.getElementsByClassName("searchTitlesOptionYes").item(0);
	buttonYes.style.backgroundColor = "white";
	let characterSearchId = document.getElementById("char-search-id");
	characterSearchId.onkeyup = function () { searchCharName() };
}

function searchCharName() {
	let dataCharName = 'data-char-name';
	let dataCharType = 'data-char-type';
	let dataCharClass = 'data-char-class';
	let dataCharRarity = 'data-char-rarity';
	let dataCharEza = 'data-char-eza';
	let filterType = ["agl", "teq", "int", "str", "phy"];
	let filterClass = ["super", "extreme"];
	let filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
	let filterEza = "eza";
	let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let dataCharEzaItems = document.querySelectorAll('[' + dataCharEza + ']');
	let char = document.getElementsByClassName("char");
	let characterSearchId = document.getElementById("char-search-id");

	let checkedTypeBtn = document.getElementsByClassName("checkedTypeBtn");
	let checkedClassBtn = document.getElementsByClassName("checkedClassBtn");
	let checkedRarityBtn = document.getElementsByClassName("checkedRarityBtn");
	let checkedEzaBtn = document.getElementsByClassName("checkedEzaBtn");
	//disappear all characters
	charDisappear(char);
	//no filters
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
				char.item(i).style.display = "inline-block";
			}
		}
	}


	//-----------------------1 filter used-------------------
	//type
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let j = 0; j < filterType.length; j++) {
			if (document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//class
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let j = 0; j < filterClass.length; j++) {
			if (document.getElementById(filterClass[j]).classList.contains("checkedClassBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//rarity
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let j = 0; j < filterRarity.length; j++) {
			if (document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//eza////////
	//-----------------------1 filter used-------------------


	//------------------------2 filters used------------------------
	//type,class
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < filterClass.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])
							&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[k])) {
							char.item(i).style.display = "inline-block";
						}
					}
				}
			}
		}
	}
	//type,rarity
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < filterRarity.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])
							&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[k])) {
							char.item(i).style.display = "inline-block";
						}
					}
				}
			}
		}
	}
	//type,eza
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let j = 0; j < filterType.length; j++) {
			if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						dataCharEzaItems.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//class,rarity
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < filterRarity.length; k++) {
			for (let j = 0; j < filterClass.length; j++) {
				if ((document.getElementById(filterClass[j]).classList.contains("checkedClassBtn"))
					&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[j])
							&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[k])) {
							char.item(i).style.display = "inline-block";
						}
					}
				}
			}
		}
	}
	//class,eza
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let j = 0; j < filterClass.length; j++) {
			if ((document.getElementById(filterClass[j]).classList.contains("checkedClassBtn"))) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[j])
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						dataCharEzaItems.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//rarity,eza
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let j = 0; j < filterRarity.length; j++) {
			if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn"))) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[j])
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						dataCharEzaItems.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//------------------------2 filters used------------------------


	//------------------------3 filters used------------------------
	//type,class,rarity
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let l = 0; l < filterRarity.length; l++) {
			for (let k = 0; k < filterClass.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
						&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))
						&& (document.getElementById(filterRarity[l]).classList.contains("checkedRarityBtn"))) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])
								&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[k])
								&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[l])) {
								char.item(i).style.display = "inline-block";
							}
						}
					}
				}
			}
		}
	}
	//type,class,eza
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let k = 0; k < filterClass.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[k])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							dataCharEzaItems.item(i).style.display = "inline-block";
						}
					}
				}
			}
		}
	}
	//type,rarity,eza
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let k = 0; k < filterRarity.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[k])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							dataCharEzaItems.item(i).style.display = "inline-block";
						}
					}
				}
			}
		}
	}
	//class,rarity,eza
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let k = 0; k < filterClass.length; k++) {
			for (let j = 0; j < filterRarity.length; j++) {
				if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn"))
					&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[k])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							dataCharEzaItems.item(i).style.display = "inline-block";
						}
					}
				}
			}
		}
	}
	//------------------------3 filters used------------------------


	//----------4 filters used----------
	//type,class,rarity,eza
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let l = 0; l < filterRarity.length; l++) {
			for (let k = 0; k < filterClass.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
						&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))
						&& (document.getElementById(filterRarity[l]).classList.contains("checkedRarityBtn"))) {
						for (let i = 0; i < dataCharEzaItems.length; i++) {
							if ((dataCharEzaItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
								&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[k])
								&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[l])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
								dataCharEzaItems.item(i).style.display = "inline-block";
							}
						}
					}
				}
			}
		}
	}
	//----------4 filters used----------
}

function searchCharTitle() {
	let dataCharTitle = 'data-char-title';
	let dataCharType = 'data-char-type';
	let dataCharClass = 'data-char-class';
	let dataCharRarity = 'data-char-rarity';
	let dataCharEza = 'data-char-eza';
	let charType = ["agl", "teq", "int", "str", "phy"];
	let charClass = ["super", "extreme"];
	let charRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
	let filterEza = "eza";
	let dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let dataCharEzaItems = document.querySelectorAll('[' + dataCharEza + ']');
	let char = document.getElementsByClassName("char");
	let characterSearchId = document.getElementById("char-search-id");

	let checkedTypeBtn = document.getElementsByClassName("checkedTypeBtn");
	let checkedClassBtn = document.getElementsByClassName("checkedClassBtn");
	let checkedRarityBtn = document.getElementsByClassName("checkedRarityBtn");
	let checkedEzaBtn = document.getElementsByClassName("checkedEzaBtn");
	//disappear all characters
	charDisappear(char);
	//no filters
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTitleItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
	//filterType
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let j = 0; j < charType.length; j++) {
			if (document.getElementsByClassName("type-btn").item(j).classList.contains("checkedTypeBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharTitleItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharTypeItems[i].getAttribute(dataCharType) == charType[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//filterClass
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let j = 0; j < charClass.length; j++) {
			if (document.getElementsByClassName("class-btn").item(j).classList.contains("checkedClassBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharTitleItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharClassItems[i].getAttribute(dataCharClass) == charClass[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//filterRarity
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let j = 0; j < charRarity.length; j++) {
			if (document.getElementsByClassName("rarity-btn").item(j).classList.contains("checkedRarityBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharTitleItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharRarityItems[i].getAttribute(dataCharRarity) == charRarity[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//filterType,filterClass
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < charClass.length; k++) {
			if (document.getElementsByClassName("class-btn").item(k).classList.contains("checkedClassBtn")) {
				for (let j = 0; j < charType.length; j++) {
					if (document.getElementsByClassName("type-btn").item(j).classList.contains("checkedTypeBtn")) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTitleItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharTypeItems[i].getAttribute(dataCharType) == charType[j]) && (dataCharClassItems[i].getAttribute(dataCharClass) == charClass[k])) {
								char.item(i).style.display = "inline-block";
							}
						}
					}
				}
			}
		}
	}
	//filterType,filterRarity
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < charRarity.length; k++) {
			if (document.getElementsByClassName("rarity-btn").item(k).classList.contains("checkedRarityBtn")) {
				for (let j = 0; j < charType.length; j++) {
					if (document.getElementsByClassName("type-btn").item(j).classList.contains("checkedTypeBtn")) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTitleItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharTypeItems[i].getAttribute(dataCharType) == charType[j]) && (dataCharRarityItems[i].getAttribute(dataCharRarity) == charRarity[k])) {
								char.item(i).style.display = "inline-block";
							}
						}
					}
				}
			}
		}
	}
	//filterClass,filterRarity
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < charRarity.length; k++) {
			if (document.getElementsByClassName("rarity-btn").item(k).classList.contains("checkedRarityBtn")) {
				for (let j = 0; j < charClass.length; j++) {
					if (document.getElementsByClassName("class-btn").item(j).classList.contains("checkedClassBtn")) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTitleItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharClassItems[i].getAttribute(dataCharClass) == charClass[j]) && (dataCharRarityItems[i].getAttribute(dataCharRarity) == charRarity[k])) {
								char.item(i).style.display = "inline-block";
							}
						}
					}
				}
			}
		}
	}
	//filterType,filterClass,filterRarity
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let l = 0; l < charRarity.length; l++) {
			if (document.getElementsByClassName("rarity-btn").item(l).classList.contains("checkedRarityBtn")) {
				for (let k = 0; k < charClass.length; k++) {
					if (document.getElementsByClassName("class-btn").item(k).classList.contains("checkedClassBtn")) {
						for (let j = 0; j < charType.length; j++) {
							if (document.getElementsByClassName("type-btn").item(j).classList.contains("checkedTypeBtn")) {
								for (let i = 0; i < char.length; i++) {
									if ((dataCharTitleItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharTypeItems[i].getAttribute(dataCharType) == charType[j]) && (dataCharClassItems[i].getAttribute(dataCharClass) == charClass[k]) && (dataCharRarityItems[i].getAttribute(dataCharRarity) == charRarity[l])) {
										char.item(i).style.display = "inline-block";
									}
								}
							}
						}
					}
				}
			}
		}
	}
}