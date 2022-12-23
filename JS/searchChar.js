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
	let charType = ["agl", "teq", "int", "str", "phy"];
	let charClass = ["super", "extreme"];
	let charRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
	let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let char = document.getElementsByClassName("char");
	let characterSearchId = document.getElementById("char-search-id");

	//disappear all characters
	charDisappear(char);
	//no filters
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
	//filterType
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		for (let j = 0; j < charType.length; j++) {
			if (document.getElementsByClassName("type-btn").item(j).classList.contains("checkedTypeBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharTypeItems[i].getAttribute(dataCharType) == charType[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//filterClass
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		for (let j = 0; j < charClass.length; j++) {
			if (document.getElementsByClassName("class-btn").item(j).classList.contains("checkedClassBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharClassItems[i].getAttribute(dataCharClass) == charClass[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//filterRarity
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
		for (let j = 0; j < charRarity.length; j++) {
			if (document.getElementsByClassName("rarity-btn").item(j).classList.contains("checkedRarityBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharRarityItems[i].getAttribute(dataCharRarity) == charRarity[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
	//filterType,filterClass
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		for (let k = 0; k < charClass.length; k++) {
			if (document.getElementsByClassName("class-btn").item(k).classList.contains("checkedClassBtn")) {
				for (let j = 0; j < charType.length; j++) {
					if (document.getElementsByClassName("type-btn").item(j).classList.contains("checkedTypeBtn")) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharTypeItems[i].getAttribute(dataCharType) == charType[j]) && (dataCharClassItems[i].getAttribute(dataCharClass) == charClass[k])) {
								char.item(i).style.display = "inline-block";
							}
						}
					}
				}
			}
		}
	}
	//filterType,filterRarity
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
		for (let k = 0; k < charRarity.length; k++) {
			if (document.getElementsByClassName("rarity-btn").item(k).classList.contains("checkedRarityBtn")) {
				for (let j = 0; j < charType.length; j++) {
					if (document.getElementsByClassName("type-btn").item(j).classList.contains("checkedTypeBtn")) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharTypeItems[i].getAttribute(dataCharType) == charType[j]) && (dataCharRarityItems[i].getAttribute(dataCharRarity) == charRarity[k])) {
								char.item(i).style.display = "inline-block";
							}
						}
					}
				}
			}
		}
	}
	//filterClass,filterRarity
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
		for (let k = 0; k < charRarity.length; k++) {
			if (document.getElementsByClassName("rarity-btn").item(k).classList.contains("checkedRarityBtn")) {
				for (let j = 0; j < charClass.length; j++) {
					if (document.getElementsByClassName("class-btn").item(j).classList.contains("checkedClassBtn")) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharClassItems[i].getAttribute(dataCharClass) == charClass[j]) && (dataCharRarityItems[i].getAttribute(dataCharRarity) == charRarity[k])) {
								char.item(i).style.display = "inline-block";
							}
						}
					}
				}
			}
		}
	}
	//filterType,filterClass,filterRarity
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
		for (let l = 0; l < charRarity.length; l++) {
			if (document.getElementsByClassName("rarity-btn").item(l).classList.contains("checkedRarityBtn")) {
				for (let k = 0; k < charClass.length; k++) {
					if (document.getElementsByClassName("class-btn").item(k).classList.contains("checkedClassBtn")) {
						for (let j = 0; j < charType.length; j++) {
							if (document.getElementsByClassName("type-btn").item(j).classList.contains("checkedTypeBtn")) {
								for (let i = 0; i < char.length; i++) {
									if ((dataCharNameItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) && (dataCharTypeItems[i].getAttribute(dataCharType) == charType[j]) && (dataCharClassItems[i].getAttribute(dataCharClass) == charClass[k]) && (dataCharRarityItems[i].getAttribute(dataCharRarity) == charRarity[l])) {
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

function searchCharTitle() {
	let dataCharTitle = 'data-char-title';
	let dataCharType = 'data-char-type';
	let dataCharClass = 'data-char-class';
	let dataCharRarity = 'data-char-rarity';
	let charType = ["agl", "teq", "int", "str", "phy"];
	let charClass = ["super", "extreme"];
	let charRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
	let dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let char = document.getElementsByClassName("char");
	let characterSearchId = document.getElementById("char-search-id");

	//disappear all characters
	charDisappear(char);
	//no filters
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTitleItems[i].getAttribute(dataCharTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
	//filterType
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
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
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
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
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
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
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
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
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
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
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
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
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
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