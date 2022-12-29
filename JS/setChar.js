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

	let char_class = document.getElementsByClassName("char");
	let char_type_base = document.getElementsByClassName("char_type_base");
	let char_thumb = document.getElementsByClassName("char_thumb");
	let char_rarity = document.getElementsByClassName("char_rarity");
	let char_type = document.getElementsByClassName("char_type");
	let char_eza = document.getElementsByClassName("char_eza");

	for (let i = 0; i < dataCharTypeItems.length; i++) {
		let char_type_base_img = document.createElement("img");
		char_type_base_img.classList.add("char_type_base");
		char_type_base_img.loading = "lazy";
		char_class.item(i).appendChild(char_type_base_img);

		let char_thumb_img = document.createElement("img");
		char_thumb_img.classList.add("char_thumb");
		char_thumb_img.loading = "lazy";
		char_thumb_img.src = dataCharIdItems[i].getAttribute(dataCharId).toLowerCase();
		char_class.item(i).appendChild(char_thumb_img);

		let char_rarity_img = document.createElement("img");
		char_rarity_img.classList.add("char_rarity");
		char_rarity_img.loading = "lazy";
		char_class.item(i).appendChild(char_rarity_img);

		let char_type_img = document.createElement("img");
		char_type_img.classList.add("char_type");
		char_type_img.loading = "lazy";
		char_class.item(i).appendChild(char_type_img);
	}

	for (let i = 0; i < char_class.length; i++) {
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

		charId = char_thumb[i].src;
		char_thumb[i].src = "char/char_thumb/char_" + charId.slice(-7) + "_thumb.png";
	}

	for (let i = 0; i < char_class.length; i++) {
		if (char_class.item(i).hasAttribute("data-char-eza")) {
			let char_eza_img = document.createElement("img");
			char_eza_img.classList.add("char_eza");
			char_eza_img.loading = "lazy";
			char_class.item(i).appendChild(char_eza_img);
		}
	}

	for (let j = 0; j < dataCharEzaItems.length; j++) {
		char_eza[j].src = "char/char_eza/eza.png";
	}

	for (let i = 0; i < dataCharTypeItems.length; i++) {
		let char_display_div = document.createElement("div");
		char_display_div.classList.add("char_display");
		char_display_div.innerHTML = dataCharNameItems[i].getAttribute(dataCharName);
		char_class.item(i).appendChild(char_display_div);
	}

	let char_display_add_color = document.getElementsByClassName("char_display");
	for (let i = 0; i < char_class.length; i++) {
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