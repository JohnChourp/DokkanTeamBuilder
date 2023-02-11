function addChar() {
	const dataCharName = 'data-char-name'
	const dataCharType = 'data-char-type';
	const dataCharRarity = 'data-char-rarity';
	const dataCharClass = 'data-char-class';
	const dataCharId = 'data-char-id';
	const dataCharEza = 'data-char-eza';
	
	const dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
	const dataCharTypeItems = document.querySelectorAll(`[${dataCharType}]`);
	const dataCharRarityItems = document.querySelectorAll(`[${dataCharRarity}]`);
	const dataCharClassItems = document.querySelectorAll(`[${dataCharClass}]`);
	const dataCharIdItems = document.querySelectorAll(`[${dataCharId}]`);
	
	const char_type_base = document.getElementsByClassName("char_type_base");
	const charThumb = document.getElementsByClassName("char_thumb");
	const charType = document.getElementsByClassName("char_type");
	const charRarity = document.getElementsByClassName("char_rarity");
	const charDisplay = document.getElementsByClassName("char_display");

	const char = document.getElementsByClassName("char");
	let charDiv, char_type_base_img, char_thumb_img, char_rarity_img,
		char_type_img, char_eza_img, char_display_div;

	let searchSettingsImageId = document.getElementById("search-settings-image-id");
	searchSettingsImageId.loading = "lazy";
	searchSettingsImageId.setAttribute("draggable", "false");
	searchSettingsImageId.alt = "search_settings_image";

	for (let i = 0, charItem; i < char.length; i++) {
		charItem = char[i];
		charDiv = document.createElement("div");
		charDiv.classList.add("char-div-class");

		//char_type_base
		char_type_base_img = document.createElement("img");
		char_type_base_img.classList.add("char_type_base");
		char_type_base_img.loading = "lazy";
		char_type_base_img.setAttribute("draggable", "false");
		char_type_base_img.alt = "char_type_base";
		charDiv.appendChild(char_type_base_img);

		//char_thumb
		char_thumb_img = document.createElement("img");
		char_thumb_img.classList.add("char_thumb");
		char_thumb_img.loading = "lazy";
		char_thumb_img.src = dataCharIdItems[i].getAttribute(dataCharId);
		char_thumb_img.setAttribute("draggable", "false");
		char_thumb_img.alt = "char_thumb";
		charDiv.appendChild(char_thumb_img);

		//char_rarity
		char_rarity_img = document.createElement("img");
		char_rarity_img.classList.add("char_rarity");
		char_rarity_img.loading = "lazy";
		char_rarity_img.setAttribute("draggable", "false");
		char_rarity_img.alt = "char_rarity";
		charDiv.appendChild(char_rarity_img);

		//char_type
		char_type_img = document.createElement("img");
		char_type_img.classList.add("char_type");
		char_type_img.loading = "lazy";
		char_type_img.setAttribute("draggable", "false");
		char_type_img.alt = "char_type";
		charDiv.appendChild(char_type_img);

		//char_eza
		if (charItem.getAttribute(dataCharEza) === "eza") {
			char_eza_img = document.createElement("img");
			char_eza_img.classList.add("char_eza");
			char_eza_img.loading = "lazy";
			char_eza_img.src = "Images/char/char_eza/eza.png";
			char_eza_img.setAttribute("draggable", "false");
			char_eza_img.alt = "char_eza";
			charDiv.appendChild(char_eza_img);
		}

		charItem.appendChild(charDiv);

		//char_display
		char_display_div = document.createElement("div");
		char_display_div.classList.add("char_display");
		char_display_div.innerHTML = dataCharNameItems[i].getAttribute(dataCharName);
		char_display_div.setAttribute("draggable", "false");
		char_display_div.alt = "char_display";
		charItem.appendChild(char_display_div);
	}

	const charRarityMap = {
		lr: "Images/char/char_rarity/char_rarity_lr.png",
		ur: "Images/char/char_rarity/char_rarity_ur.png",
		ssr: "Images/char/char_rarity/char_rarity_ssr.png",
		sr: "Images/char/char_rarity/char_rarity_sr.png",
		r: "Images/char/char_rarity/char_rarity_r.png",
		n: "Images/char/char_rarity/char_rarity_n.png",
	};
	const charClassMap = {
		super: {
			agl: 'Images/char/char_type/char_type_super_agl.png',
			int: 'Images/char/char_type/char_type_super_int.png',
			phy: 'Images/char/char_type/char_type_super_phy.png',
			str: 'Images/char/char_type/char_type_super_str.png',
			teq: 'Images/char/char_type/char_type_super_teq.png',
		},
		extreme: {
			agl: 'Images/char/char_type/char_type_extreme_agl.png',
			int: 'Images/char/char_type/char_type_extreme_int.png',
			phy: 'Images/char/char_type/char_type_extreme_phy.png',
			str: 'Images/char/char_type/char_type_extreme_str.png',
			teq: 'Images/char/char_type/char_type_extreme_teq.png',
		},
	};
	const colorMap = {
		agl: '#00AAEE',
		teq: '#3df05b',
		int: '#c953e0',
		str: '#f77777',
		phy: '#eec038',
	};

	for (let i = 0; i < char.length; i++) {
		const charTypeValue = dataCharTypeItems[i].getAttribute(dataCharType);
		const charRarityValue = dataCharRarityItems[i].getAttribute(dataCharRarity);
		const charClassValue = dataCharClassItems[i].getAttribute(dataCharClass);
		const charThumbSrc = charThumb[i].src;

		charType[i].src = charClassMap[charClassValue][charTypeValue];
		charRarity[i].src = charRarityMap[charRarityValue];
		charThumb[i].src = `Images/char/char_thumb/char_${charThumbSrc.slice(-7)}_thumb.png`;
		charDisplay[i].style.backgroundColor = colorMap[charTypeValue];

		if (charRarityValue == "lr") {
			char_type_base[i].src = "Images/char/char_type_base/char_type_base_ssr_" + charTypeValue + ".png";
		}
		if (charRarityValue == "ur") {
			char_type_base[i].src = "Images/char/char_type_base/char_type_base_ssr_" + charTypeValue + ".png";
		}
		if (charRarityValue == "ssr" || charRarityValue == "sr" || charRarityValue == "r" || charRarityValue == "n") {
			char_type_base[i].src = "Images/char/char_type_base/char_type_base_" + charRarityValue + "_" + charTypeValue + ".png";
		}
	}
}