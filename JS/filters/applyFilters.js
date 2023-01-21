function applyFilters() {
	getCharList();
	//sortDirection
	let char_container_id = document.getElementById("char-container-id");
	let char = document.getElementsByClassName("char");
	let checkedDirectionBtn = document.getElementsByClassName("checkedDirectionBtn");
	if (checkedDirectionBtn.length == 1) {
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		let charLength = char.length;
		char_container_id.innerHTML = "";
		for (let i = charLength - 1; i > -1; i--) {
			char_container_id.appendChild(temp_char[i]);
		}
	}

	//select one char
	let searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");
	for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
		if (searchOneCharDropdownValue.item(i).classList.contains("checkedSearchOneCharBtn")) {
			addSearchOneCharDropdownClass(i);
		}
	}

	let dataCharType = 'data-char-type', dataCharRarity = 'data-char-rarity', dataCharClass = 'data-char-class',
		dataCharEza = 'data-char-eza', dataCharAwaken = 'data-char-awaken';
	let filterType = [], filterRarity = [], filterClass = [], filterEza = [],
		filterAwakenId = [], filterAwakenValue = [], charList = [];

	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let dataCharEzaItems = document.querySelectorAll('[' + dataCharEza + ']');
	let dataCharAwakenItems = document.querySelectorAll('[' + dataCharAwaken + ']');

	let A = document.getElementsByClassName("checkedTypeBtn");
	let B = document.getElementsByClassName("checkedRarityBtn");
	let C = document.getElementsByClassName("checkedClassBtn");
	let D = document.getElementsByClassName("checkedEzaBtn");
	let E = document.getElementsByClassName("checkedAwakenBtn");

	//filterType
	let filterTypeTemp = ["agl", "teq", "int", "str", "phy"];
	let filterTypeLength = filterTypeTemp.length;
	for (let i = 0; i < filterTypeLength; i++) {
		if (document.getElementById(filterTypeTemp[i]).classList.contains("checkedTypeBtn")) {
			filterType[i] = filterTypeTemp[i];
		}
	}
	filterType.clean(undefined);

	//filterRarity
	let filterRarityTemp = ["n", "r", "sr", "ssr", "ur", "lr"];
	let filterRarityLength = filterRarityTemp.length;
	for (let i = 0; i < filterRarityLength; i++) {
		if (document.getElementById(filterRarityTemp[i]).classList.contains("checkedRarityBtn")) {
			filterRarity[i] = filterRarityTemp[i];
		}
	}
	filterRarity.clean(undefined);

	//filterClass
	let filterClassTemp = ["super", "extreme"];
	let filterClassLength = filterClassTemp.length;
	for (let i = 0; i < filterClassLength; i++) {
		if (document.getElementById(filterClassTemp[i]).classList.contains("checkedClassBtn")) {
			filterClass[i] = filterClassTemp[i];
		}
	}
	filterClass.clean(undefined);

	//filterEza
	let filterEzaTemp = ["eza", "noeza"];
	let filterEzaLength = filterEzaTemp.length;
	for (let i = 0; i < filterEzaLength; i++) {
		if (document.getElementById(filterEzaTemp[i]).classList.contains("checkedEzaBtn")) {
			filterEza[i] = filterEzaTemp[i];
		}
	}
	filterEza.clean(undefined);

	//filterAwaken
	let filterAwakenIdTemp = ["notDokkanAwakened", "preDokkanAwakened", "dokkanAwakened"];
	let filterAwakenValueTemp = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"];
	let filterAwakenIdLength = filterAwakenIdTemp.length;
	for (let i = 0; i < filterAwakenIdLength; i++) {
		if (document.getElementById(filterAwakenIdTemp[i]).classList.contains("checkedAwakenBtn")) {
			filterAwakenId[i] = filterAwakenIdTemp[i];
			filterAwakenValue[i] = filterAwakenValueTemp[i];
		}
	}
	filterAwakenId.clean(undefined);
	filterAwakenValue.clean(undefined);

	let filtersUsed = [filterType.length, filterRarity.length, filterClass.length, filterEza.length, filterAwakenId.length];
	let sumFilterUsed = 0;
	//check how many filter are used
	for (let i = 0; i < filtersUsed.length; i++) {
		if (filtersUsed[i] > 0) {
			sumFilterUsed = sumFilterUsed + 1;
		}
	}

	if (sumFilterUsed == 0) {
		for (let i = 0; i < char.length; i++) {
			charList[i] = char.item(i);
		}
	}
	if (sumFilterUsed == 1) {
		//type//A,rarity//B,class//C,eza//D,dokkan//E
		//A B C D E
		//-------------------------------1 filter used-------------------------------
		//type//A
		if ((A.length > 0) && (B.length == 0) && (C.length == 0) && (D.length == 0) && (E.length == 0)) {
			for (let j = 0; j < filterType.length; j++) {
				for (let i = 0; i < char.length; i++) {
					if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j]) {
						charList[i] = char.item(i);
					}
				}
			}
		}
		//rarity//B
		if ((A.length == 0) && (B.length > 0) && (C.length == 0) && (D.length == 0) && (E.length == 0)) {
			for (let j = 0; j < filterRarity.length; j++) {
				for (let i = 0; i < char.length; i++) {
					if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j]) {
						charList[i] = char.item(i);
					}
				}
			}
		}
		//class//C
		if ((A.length == 0) && (B.length == 0) && (C.length > 0) && (D.length == 0) && (E.length == 0)) {
			for (let j = 0; j < filterClass.length; j++) {
				for (let i = 0; i < char.length; i++) {
					if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[j]) {
						charList[i] = char.item(i);
					}
				}
			}
		}
		//eza//D
		if ((A.length == 0) && (B.length == 0) && (C.length == 0) && (D.length > 0) && (E.length == 0)) {
			for (let j = 0; j < filterEza.length; j++) {
				for (let i = 0; i < char.length; i++) {
					if (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[j]) {
						charList[i] = char.item(i);
					}
				}
			}
		}
		//dokkan//E
		if ((A.length == 0) && (B.length == 0) && (C.length == 0) && (D.length == 0) && (E.length > 0)) {
			for (let j = 0; j < filterAwakenId.length; j++) {
				for (let i = 0; i < char.length; i++) {
					if (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[j]) {
						charList[i] = char.item(i);
					}
				}
			}
		}
		//-------------------------------1 filter used-------------------------------
	}
	if (sumFilterUsed == 2) {
		//type//A,rarity//B,class//C,eza//D,dokkan//E
		//AB AC AD AE BC BD BE CD CE DE
		//------------------------------2 filters used------------------------------
		//type,rarity//AB
		if ((A.length > 0) && (B.length > 0) && (C.length == 0) && (D.length == 0) && (E.length == 0)) {
			for (let k = 0; k < filterRarity.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
							&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//type,class//AC
		if ((A.length > 0) && (B.length == 0) && (C.length > 0) && (D.length == 0) && (E.length == 0)) {
			for (let k = 0; k < filterClass.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
							&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//type,eza//AD
		if ((A.length > 0) && (B.length == 0) && (C.length == 0) && (D.length > 0) && (E.length == 0)) {
			for (let k = 0; k < filterEza.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[k])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//type,dokkan//AE
		if ((A.length > 0) && (B.length == 0) && (C.length == 0) && (D.length == 0) && (E.length > 0)) {
			for (let k = 0; k < filterAwakenId.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
							&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[k])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//rarity,class//BC
		if ((A.length == 0) && (B.length > 0) && (C.length > 0) && (D.length == 0) && (E.length == 0)) {
			for (let k = 0; k < filterClass.length; k++) {
				for (let j = 0; j < filterRarity.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])
							&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//rarity,eza//BD
		if ((A.length == 0) && (B.length > 0) && (C.length == 0) && (D.length > 0) && (E.length == 0)) {
			for (let k = 0; k < filterEza.length; k++) {
				for (let j = 0; j < filterRarity.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[k])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//rarity,dokkan//BE
		if ((A.length == 0) && (B.length > 0) && (C.length == 0) && (D.length == 0) && (E.length > 0)) {
			for (let k = 0; k < filterAwakenId.length; k++) {
				for (let j = 0; j < filterRarity.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])
							&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[k])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//class,eza//CD
		if ((A.length == 0) && (B.length == 0) && (C.length > 0) && (D.length > 0) && (E.length == 0)) {
			for (let k = 0; k < filterEza.length; k++) {
				for (let j = 0; j < filterClass.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[k])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//class,dokkan//CE
		if ((A.length == 0) && (B.length == 0) && (C.length > 0) && (D.length == 0) && (E.length > 0)) {
			for (let k = 0; k < filterAwakenId.length; k++) {
				for (let j = 0; j < filterClass.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[j])
							&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[k])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//eza,dokkan//DE
		if ((A.length == 0) && (B.length == 0) && (C.length == 0) && (D.length > 0) && (E.length > 0)) {
			for (let k = 0; k < filterAwakenId.length; k++) {
				for (let j = 0; j < filterEza.length; j++) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[j])
							&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[k])) {
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
		//------------------------------2 filters used------------------------------
	}
	if (sumFilterUsed == 3) {
		//type//A,rarity//B,class//C,eza//D,dokkan//E
		//ABC ABD ABE ACD ACE ADE BCD BCE BDE CDE
		//------------------------------3 filters used------------------------------
		//type,rarity,class//ABC
		if ((A.length > 0) && (B.length > 0) && (C.length > 0) && (D.length == 0) && (E.length == 0)) {
			for (let l = 0; l < filterClass.length; l++) {
				for (let k = 0; k < filterRarity.length; k++) {
					for (let j = 0; j < filterType.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
								&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])
								&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//type,rarity,eza//ABD
		if ((A.length > 0) && (B.length > 0) && (C.length == 0) && (D.length > 0) && (E.length == 0)) {
			for (let k = 0; k < filterEza.length; k++) {
				for (let l = 0; l < filterRarity.length; l++) {
					for (let j = 0; j < filterType.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
								&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[l])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[k])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//type,rarity,dokkan//ABE
		if ((A.length > 0) && (B.length > 0) && (C.length == 0) && (D.length == 0) && (E.length > 0)) {
			for (let k = 0; k < filterAwakenId.length; k++) {
				for (let l = 0; l < filterRarity.length; l++) {
					for (let j = 0; j < filterType.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
								&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[l])
								&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[k])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//type,class,eza//ACD
		if ((A.length > 0) && (B.length == 0) && (C.length > 0) && (D.length > 0) && (E.length == 0)) {
			for (let k = 0; k < filterEza.length; k++) {
				for (let l = 0; l < filterClass.length; l++) {
					for (let j = 0; j < filterType.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
								&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[k])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//type,class,dokkan//ACE
		if ((A.length > 0) && (B.length == 0) && (C.length > 0) && (D.length == 0) && (E.length > 0)) {
			for (let k = 0; k < filterAwakenId.length; k++) {
				for (let l = 0; l < filterClass.length; l++) {
					for (let j = 0; j < filterType.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
								&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])
								&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[k])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//type,eza,dokkan//ADE
		if ((A.length > 0) && (B.length == 0) && (C.length == 0) && (D.length > 0) && (E.length > 0)) {
			for (let l = 0; l < filterAwakenId.length; l++) {
				for (let k = 0; k < filterEza.length; k++) {
					for (let j = 0; j < filterType.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[k])
								&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[l])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//rarity,class,eza//BCD
		if ((A.length == 0) && (B.length > 0) && (C.length > 0) && (D.length > 0) && (E.length == 0)) {
			for (let l = 0; l < filterEza.length; l++) {
				for (let k = 0; k < filterClass.length; k++) {
					for (let j = 0; j < filterRarity.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])
								&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[l])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//rarity,class,dokkan//BCE
		if ((A.length == 0) && (B.length > 0) && (C.length > 0) && (D.length == 0) && (E.length > 0)) {
			for (let l = 0; l < filterAwakenId.length; l++) {
				for (let k = 0; k < filterClass.length; k++) {
					for (let j = 0; j < filterRarity.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])
								&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])
								&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[l])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//rarity,eza,dokkan//BDE
		if ((A.length == 0) && (B.length > 0) && (C.length == 0) && (D.length > 0) && (E.length > 0)) {
			for (let l = 0; l < filterAwakenId.length; l++) {
				for (let k = 0; k < filterEza.length; k++) {
					for (let j = 0; j < filterRarity.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[k])
								&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[l])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//class,eza,dokkan//CDE
		if ((A.length == 0) && (B.length == 0) && (C.length > 0) && (D.length > 0) && (E.length > 0)) {
			for (let l = 0; l < filterAwakenId.length; l++) {
				for (let k = 0; k < filterEza.length; k++) {
					for (let j = 0; j < filterClass.length; j++) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[j])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[k])
								&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[l])) {
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
		//------------------------------3 filters used------------------------------
	}
	if (sumFilterUsed == 4) {
		//type//A,rarity//B,class//C,eza//D,dokkan//E
		//ABCD ABCE ABDE ACDE BCDE
		//------------------------------4 filters used------------------------------
		//type,rarity,class,eza//ABCD
		if ((A.length > 0) && (B.length > 0) && (C.length > 0) && (D.length > 0) && (E.length == 0)) {
			for (let p = 0; p < filterEza.length; p++) {
				for (let l = 0; l < filterClass.length; l++) {
					for (let k = 0; k < filterRarity.length; k++) {
						for (let j = 0; j < filterType.length; j++) {
							for (let i = 0; i < char.length; i++) {
								if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
									&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])
									&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])
									&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[p])) {
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
		}
		//type,rarity,class,dokkan//ABCE
		if ((A.length > 0) && (B.length > 0) && (C.length > 0) && (D.length == 0) && (E.length > 0)) {
			for (let p = 0; p < filterAwakenId.length; p++) {
				for (let l = 0; l < filterClass.length; l++) {
					for (let k = 0; k < filterRarity.length; k++) {
						for (let j = 0; j < filterType.length; j++) {
							for (let i = 0; i < dataCharEzaItems.length; i++) {
								if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
									&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])
									&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])
									&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[p])) {
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
		}
		//type,rarity,eza,dokkan//ABDE
		if ((A.length > 0) && (B.length > 0) && (C.length == 0) && (D.length > 0) && (E.length > 0)) {
			for (let p = 0; p < filterAwakenId.length; p++) {
				for (let l = 0; l < filterEza.length; l++) {
					for (let k = 0; k < filterRarity.length; k++) {
						for (let j = 0; j < filterType.length; j++) {
							for (let i = 0; i < char.length; i++) {
								if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
									&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])
									&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[l])
									&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[p])) {
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
		}
		//type,class,eza,dokkan//ACDE
		if ((A.length > 0) && (B.length == 0) && (C.length > 0) && (D.length > 0) && (E.length > 0)) {
			for (let p = 0; p < filterAwakenId.length; p++) {
				for (let l = 0; l < filterEza.length; l++) {
					for (let k = 0; k < filterClass.length; k++) {
						for (let j = 0; j < filterType.length; j++) {
							for (let i = 0; i < char.length; i++) {
								if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
									&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])
									&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[l])
									&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[p])) {
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
		}
		//rarity,class,eza,dokkan//BCDE
		if ((A.length == 0) && (B.length > 0) && (C.length > 0) && (D.length > 0) && (E.length > 0)) {
			for (let p = 0; p < filterAwakenId.length; p++) {
				for (let l = 0; l < filterEza.length; l++) {
					for (let k = 0; k < filterClass.length; k++) {
						for (let j = 0; j < filterRarity.length; j++) {
							for (let i = 0; i < char.length; i++) {
								if ((dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])
									&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])
									&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[l])
									&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[p])) {
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
		}
		//------------------------------4 filters used------------------------------
	}
	if (sumFilterUsed == 5) {
		//type//A,rarity//B,class//C,eza//D,dokkan//E
		//ABCDE
		//------------------------------5 filters used------------------------------
		//type,rarity,class,eza,dokkan//ABCDE
		if ((A.length > 0) && (B.length > 0) && (C.length > 0) && (D.length > 0) && (E.length > 0)) {
			for (let o = 0; o < filterAwakenId.length; o++) {
				for (let p = 0; p < filterEza.length; p++) {
					for (let l = 0; l < filterClass.length; l++) {
						for (let k = 0; k < filterRarity.length; k++) {
							for (let j = 0; j < filterType.length; j++) {
								for (let i = 0; i < char.length; i++) {
									if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
										&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])
										&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])
										&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza[p])
										&& (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == filterAwakenValue[o])) {
										charList[i] = char.item(i);
									}
								}
							}
						}
					}
				}
			}
		}
		//------------------------------5 filters used------------------------------
	}

	charList.clean(undefined);
	createFilterPagination(charList, localStorage.getItem("charsPerPageNumItem"));

	let characterSearchId = document.getElementById("char-search-id");
	if (characterSearchId.value.length > 0) {
		characterSearchId.value = "";
	}
	addDropdownClass(localStorage.getItem("filterDisplay"));
}