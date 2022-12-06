function addChar() {
	let dataCharType = 'data-char-type';
	let dataCharRarity = 'data-char-rarity';
	let dataCharClass = 'data-char-class';
	let dataCharId = 'data-char-id';

	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharIdItems = document.querySelectorAll('[' + dataCharId + ']');

	let char_type_base = document.getElementsByClassName("char_type_base");
	let char_thumb = document.getElementsByClassName("char_thumb");
	let char_rarity = document.getElementsByClassName("char_rarity");
	let char_type = document.getElementsByClassName("char_type");

	for (let i = 0; i < dataCharTypeItems.length; i++) {
		let char_class = document.getElementsByClassName("char");
	
		let char_type_base_img = document.createElement("img");
		char_type_base_img.classList.add("char_type_base");
		char_type_base_img.loading ="lazy";

		let char_thumb_img = document.createElement("img");
		char_thumb_img.classList.add("char_thumb");
		char_thumb_img.loading ="lazy";
		char_thumb_img.src = dataCharIdItems[i].getAttribute(dataCharId).toLowerCase();

		let char_rarity_img = document.createElement("img");
		char_rarity_img.classList.add("char_rarity");
		char_rarity_img.loading ="lazy";

		let char_type_img = document.createElement("img");
		char_type_img.classList.add("char_type");
		char_type_img.loading ="lazy";

		char_class.item(i).appendChild(char_type_base_img);
		char_class.item(i).appendChild(char_thumb_img);
		char_class.item(i).appendChild(char_rarity_img);
		char_class.item(i).appendChild(char_type_img);
	}

	for (let i = 0; i < dataCharTypeItems.length; i++) {
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "ur") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_agl.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ur.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_int.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ur.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_phy.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ur.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_str.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ur.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_teq.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ur.webp";
			}
		}
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "ssr") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_agl.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ssr.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_int.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ssr.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_phy.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ssr.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_str.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ssr.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char_type_base/char_type_base_ssr_teq.webp";
				char_rarity[i].src = "char_rarity/char_rarity_ssr.webp";
			}
		}
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "sr") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char_type_base/char_type_base_sr_agl.webp";
				char_rarity[i].src = "char_rarity/char_rarity_sr.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char_type_base/char_type_base_sr_int.webp";
				char_rarity[i].src = "char_rarity/char_rarity_sr.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char_type_base/char_type_base_sr_phy.webp";
				char_rarity[i].src = "char_rarity/char_rarity_sr.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char_type_base/char_type_base_sr_str.webp";
				char_rarity[i].src = "char_rarity/char_rarity_sr.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char_type_base/char_type_base_sr_teq.webp";
				char_rarity[i].src = "char_rarity/char_rarity_sr.webp";
			}
		}
		if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "r") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type_base[i].src = "char_type_base/char_type_base_r_agl.webp";
				char_rarity[i].src = "char_rarity/char_rarity_r.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type_base[i].src = "char_type_base/char_type_base_r_int.webp";
				char_rarity[i].src = "char_rarity/char_rarity_r.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type_base[i].src = "char_type_base/char_type_base_r_phy.webp";
				char_rarity[i].src = "char_rarity/char_rarity_r.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type_base[i].src = "char_type_base/char_type_base_r_str.webp";
				char_rarity[i].src = "char_rarity/char_rarity_r.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type_base[i].src = "char_type_base/char_type_base_r_teq.webp";
				char_rarity[i].src = "char_rarity/char_rarity_r.webp";
			}
		}

		if (dataCharClassItems[i].getAttribute(dataCharClass) == "super") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type[i].src = "char_type/char_type_super_agl.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type[i].src = "char_type/char_type_super_int.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type[i].src = "char_type/char_type_super_phy.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type[i].src = "char_type/char_type_super_str.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type[i].src = "char_type/char_type_super_teq.webp";
			}
		}

		if (dataCharClassItems[i].getAttribute(dataCharClass) == "extreme") {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				char_type[i].src = "char_type/char_type_extreme_agl.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				char_type[i].src = "char_type/char_type_extreme_int.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				char_type[i].src = "char_type/char_type_extreme_phy.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				char_type[i].src = "char_type/char_type_extreme_str.webp";
			}
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				char_type[i].src = "char_type/char_type_extreme_teq.webp";
			}
		}
		
		charId = char_thumb[i].src;
		char_thumb[i].src = "char_thumb/char_" + charId.slice(-7) + "_thumb.png";
	}
}