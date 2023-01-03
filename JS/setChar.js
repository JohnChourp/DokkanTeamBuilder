function addChar() {
	let dataCharName = 'data-char-name';
	let dataCharType = 'data-char-type';
	let dataCharRarity = 'data-char-rarity';
	let dataCharClass = 'data-char-class';
	let dataCharEza = 'data-char-eza';
	let dataCharId = 'data-char-id';

	let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharEzaItems = document.querySelectorAll('[' + dataCharEza + ']');
	let dataCharIdItems = document.querySelectorAll('[' + dataCharId + ']');

	let char = document.getElementsByClassName("char");
	let char_type_base = document.getElementsByClassName("char_type_base");
	let char_thumb = document.getElementsByClassName("char_thumb");
	let char_rarity = document.getElementsByClassName("char_rarity");
	let char_type = document.getElementsByClassName("char_type");
	
	for (let i = 0; i < dataCharTypeItems.length; i++) {
		let char_type_base_img = document.createElement("img");
		char_type_base_img.classList.add("char_type_base");
		char_type_base_img.loading = "lazy";
		char.item(i).appendChild(char_type_base_img);

		let char_thumb_img = document.createElement("img");
		char_thumb_img.classList.add("char_thumb");
		char_thumb_img.loading = "lazy";
		char_thumb_img.src = dataCharIdItems[i].getAttribute(dataCharId).toLowerCase();
		char.item(i).appendChild(char_thumb_img);

		let char_rarity_img = document.createElement("img");
		char_rarity_img.classList.add("char_rarity");
		char_rarity_img.loading = "lazy";
		char.item(i).appendChild(char_rarity_img);

		let char_type_img = document.createElement("img");
		char_type_img.classList.add("char_type");
		char_type_img.loading = "lazy";
		char.item(i).appendChild(char_type_img);
	}

	for (let i = 0; i < char.length; i++) {
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "lr") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_agl.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_lr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_int.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_lr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_phy.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_lr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_str.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_lr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_teq.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_lr.png";
			}
		}
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "ur") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_agl.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ur.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_int.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ur.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_phy.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ur.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_str.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ur.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_teq.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ur.png";
			}
		}
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "ssr") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_agl.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ssr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_int.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ssr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_phy.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ssr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_str.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ssr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char/char_type_base/char_type_base_ssr_teq.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_ssr.png";
			}
		}
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "sr") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char/char_type_base/char_type_base_sr_agl.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_sr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char/char_type_base/char_type_base_sr_int.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_sr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char/char_type_base/char_type_base_sr_phy.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_sr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char/char_type_base/char_type_base_sr_str.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_sr.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char/char_type_base/char_type_base_sr_teq.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_sr.png";
			}
		}
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "r") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char/char_type_base/char_type_base_r_agl.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_r.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char/char_type_base/char_type_base_r_int.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_r.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char/char_type_base/char_type_base_r_phy.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_r.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char/char_type_base/char_type_base_r_str.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_r.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char/char_type_base/char_type_base_r_teq.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_r.png";
			}
		}
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "n") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char/char_type_base/char_type_base_n_agl.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_n.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char/char_type_base/char_type_base_n_int.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_n.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char/char_type_base/char_type_base_n_phy.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_n.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char/char_type_base/char_type_base_n_str.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_n.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char/char_type_base/char_type_base_n_teq.png";
				char_rarity[i].src = "char/char_rarity/char_rarity_n.png";
			}
		}

		if (dataCharClassItems[i].getAttribute(dataCharClass) == "super") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type[i].src = "char/char_type/char_type_super_agl.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type[i].src = "char/char_type/char_type_super_int.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type[i].src = "char/char_type/char_type_super_phy.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type[i].src = "char/char_type/char_type_super_str.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type[i].src = "char/char_type/char_type_super_teq.png";
			}
		}

		if (dataCharClassItems[i].getAttribute(dataCharClass) == "extreme") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type[i].src = "char/char_type/char_type_extreme_agl.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type[i].src = "char/char_type/char_type_extreme_int.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type[i].src = "char/char_type/char_type_extreme_phy.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type[i].src = "char/char_type/char_type_extreme_str.png";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type[i].src = "char/char_type/char_type_extreme_teq.png";
			}
		}

		let charId = char_thumb[i].src;
		char_thumb[i].src = "char/char_thumb/char_" + charId.slice(-7) + "_thumb.png";
	}

	for (let i = 0; i < char.length; i++) {
		if (char.item(i).getAttribute("data-char-eza") == "eza") {
			let char_eza_img = document.createElement("img");
			char_eza_img.classList.add("char_eza");
			char_eza_img.loading = "lazy";
			char_eza_img.src = "char/char_eza/eza.png";
			char.item(i).appendChild(char_eza_img);
		}
	}

	for (let i = 0; i < dataCharTypeItems.length; i++) {
		let char_display_div = document.createElement("div");
		char_display_div.classList.add("char_display");
		char_display_div.innerHTML = dataCharNameItems[i].getAttribute(dataCharName);
		char.item(i).appendChild(char_display_div);
	}

	let char_display_add_color = document.getElementsByClassName("char_display");
	for (let i = 0; i < char.length; i++) {
		if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
			char_display_add_color.item(i).style.backgroundColor = "#00AAEE";
		}
		if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
			char_display_add_color.item(i).style.backgroundColor = "#3df05b";
		}
		if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
			char_display_add_color.item(i).style.backgroundColor = "#c953e0";
		}
		if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
			char_display_add_color.item(i).style.backgroundColor = "#f77777";
		}
		if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
			char_display_add_color.item(i).style.backgroundColor = "#eec038";
		}
	}

}
function saveCharList() {
	let charList_dataCharNameItems = [], charList_dataCharTitleItems = [], charList_dataCharTypeItems = [],
		charList_dataCharRarityItems = [], charList_dataCharClassItems = [], charList_dataCharEzaItems = [],
		charList_dataCharidItems = [], charList_dataCharHpItems = [], charList_dataCharAttackItems = [],
		charList_dataCharDefenseItems = [], charList_dataCharCostItems = [], charList_dataCharMaxLevelItems = [],
		charList_dataCharSuperAtkLevelItems = [], charList_dataCharRecruitItems = [], charList_dataCharReleaseItems = [],
		charList_dataCharSuperAtkTypeItems = [], charList_dataCharLinksItems = [], charList_dataCharCategoriesItems = [];
	let char = document.getElementsByClassName("char");
	for (let i = 0; i < char.length; i++) {
		charList_dataCharNameItems[i] = char.item(i).getAttribute("data-char-name");
		charList_dataCharTitleItems[i] = char.item(i).getAttribute("data-char-title");
		charList_dataCharTypeItems[i] = char.item(i).getAttribute("data-char-type");
		charList_dataCharRarityItems[i] = char.item(i).getAttribute("data-char-rarity");
		charList_dataCharClassItems[i] = char.item(i).getAttribute("data-char-class");
		charList_dataCharEzaItems[i] = char.item(i).getAttribute("data-char-eza");
		charList_dataCharidItems[i] = char.item(i).getAttribute("data-char-id");
		charList_dataCharHpItems[i] = char.item(i).getAttribute("data-char-hp");
		charList_dataCharAttackItems[i] = char.item(i).getAttribute("data-char-attack");
		charList_dataCharDefenseItems[i] = char.item(i).getAttribute("data-char-defense");
		charList_dataCharCostItems[i] = char.item(i).getAttribute("data-char-cost");
		charList_dataCharMaxLevelItems[i] = char.item(i).getAttribute("data-char-max-level");
		charList_dataCharSuperAtkLevelItems[i] = char.item(i).getAttribute("data-char-super-atk-level");
		charList_dataCharRecruitItems[i] = char.item(i).getAttribute("data-char-recruit");
		charList_dataCharReleaseItems[i] = char.item(i).getAttribute("data-char-release");
		charList_dataCharSuperAtkTypeItems[i] = char.item(i).getAttribute("data-char-super-atk-type");
		charList_dataCharLinksItems[i] = char.item(i).getAttribute("data-char-links");
		charList_dataCharCategoriesItems[i] = char.item(i).getAttribute("data-char-categories");
	}
	localStorage.setItem("charList_dataCharNameItems", JSON.stringify(charList_dataCharNameItems));
	localStorage.setItem("charList_dataCharTitleItems", JSON.stringify(charList_dataCharTitleItems));
	localStorage.setItem("charList_dataCharTypeItems", JSON.stringify(charList_dataCharTypeItems));
	localStorage.setItem("charList_dataCharRarityItems", JSON.stringify(charList_dataCharRarityItems));
	localStorage.setItem("charList_dataCharClassItems", JSON.stringify(charList_dataCharClassItems));
	localStorage.setItem("charList_dataCharEzaItems", JSON.stringify(charList_dataCharEzaItems));
	localStorage.setItem("charList_dataCharidItems", JSON.stringify(charList_dataCharidItems));
	localStorage.setItem("charList_dataCharHpItems", JSON.stringify(charList_dataCharHpItems));
	localStorage.setItem("charList_dataCharAttackItems", JSON.stringify(charList_dataCharAttackItems));
	localStorage.setItem("charList_dataCharDefenseItems", JSON.stringify(charList_dataCharDefenseItems));
	localStorage.setItem("charList_dataCharCostItems", JSON.stringify(charList_dataCharCostItems));
	localStorage.setItem("charList_dataCharMaxLevelItems", JSON.stringify(charList_dataCharMaxLevelItems));
	localStorage.setItem("charList_dataCharSuperAtkLevelItems", JSON.stringify(charList_dataCharSuperAtkLevelItems));
	localStorage.setItem("charList_dataCharRecruitItems", JSON.stringify(charList_dataCharRecruitItems));
	localStorage.setItem("charList_dataCharReleaseItems", JSON.stringify(charList_dataCharReleaseItems));
	localStorage.setItem("charList_dataCharSuperAtkTypeItems", JSON.stringify(charList_dataCharSuperAtkTypeItems));
	localStorage.setItem("charList_dataCharLinksItems", JSON.stringify(charList_dataCharLinksItems));
	localStorage.setItem("charList_dataCharCategoriesItems", JSON.stringify(charList_dataCharCategoriesItems));
}