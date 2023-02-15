function addChar(charsPerPageNumItem) {
	const dataCharName = 'data-char-name'
	const dataCharType = 'data-char-type';
	const dataCharRarity = 'data-char-rarity';
	const dataCharClass = 'data-char-class';
	const dataCharId = 'data-char-id';
	const dataCharEza = 'data-char-eza';

	const dataCharNameItems = document.querySelectorAll(`[${dataCharName}]`);
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

	const searchSettingsImageId = document.getElementById("search-settings-image-id");
	searchSettingsImageId.loading = "lazy";
	searchSettingsImageId.setAttribute("draggable", "false");
	searchSettingsImageId.alt = "search_settings_image";

	for (let i = 0; i < charsPerPageNumItem; i++) {
		const charItem = char[i];
		const charDiv = document.createElement("div");
		charDiv.classList.add("char-div-class");

		//char_type_base
		const char_type_base_img = document.createElement("img");
		char_type_base_img.classList.add("char_type_base");
		char_type_base_img.loading = "lazy";
		char_type_base_img.setAttribute("draggable", "false");
		char_type_base_img.alt = "char_type_base";
		charDiv.appendChild(char_type_base_img);

		//char_thumb
		const char_thumb_img = document.createElement("img");
		char_thumb_img.classList.add("char_thumb");
		char_thumb_img.loading = "lazy";
		char_thumb_img.src = dataCharIdItems[i].getAttribute(dataCharId);
		char_thumb_img.setAttribute("draggable", "false");
		char_thumb_img.alt = "char_thumb";
		charDiv.appendChild(char_thumb_img);

		//char_rarity
		const char_rarity_img = document.createElement("img");
		char_rarity_img.classList.add("char_rarity");
		char_rarity_img.loading = "lazy";
		char_rarity_img.setAttribute("draggable", "false");
		char_rarity_img.alt = "char_rarity";
		charDiv.appendChild(char_rarity_img);

		//char_type
		const char_type_img = document.createElement("img");
		char_type_img.classList.add("char_type");
		char_type_img.loading = "lazy";
		char_type_img.setAttribute("draggable", "false");
		char_type_img.alt = "char_type";
		charDiv.appendChild(char_type_img);

		//char_eza
		if (charItem.getAttribute(dataCharEza) === "eza") {
			const char_eza_img = document.createElement("img");
			char_eza_img.classList.add("char_eza");
			char_eza_img.loading = "lazy";
			char_eza_img.src = "Images/char/char_eza/eza.png";
			char_eza_img.setAttribute("draggable", "false");
			char_eza_img.alt = "char_eza";
			charDiv.appendChild(char_eza_img);
		}

		charItem.appendChild(charDiv);

		//char_display
		const char_display_div = document.createElement("div");
		char_display_div.classList.add("char_display");
		char_display_div.setAttribute("draggable", "false");
		char_display_div.alt = "char_display";

		//char_display_text
		const char_display_text_div = document.createElement("div");
		char_display_text_div.classList.add("char_display_text");
		char_display_text_div.innerHTML = dataCharNameItems[i].getAttribute(dataCharName);
		char_display_text_div.setAttribute("draggable", "false");
		char_display_text_div.alt = "char_display_text";
		char_display_div.appendChild(char_display_text_div);

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
		agl: 'url(\'Images/char_filter/char_filter_type/agl.png\')',
		teq: 'url(\'Images/char_filter/char_filter_type/teq.png\')',
		int: 'url(\'Images/char_filter/char_filter_type/int.png\')',
		str: 'url(\'Images/char_filter/char_filter_type/str.png\')',
		phy: 'url(\'Images/char_filter/char_filter_type/phy.png\')',
	};
	const colorMapMobile = {
		agl: 'url(\'Images/char_filter/char_filter_type/agl_mobile.png\')',
		teq: 'url(\'Images/char_filter/char_filter_type/teq_mobile.png\')',
		int: 'url(\'Images/char_filter/char_filter_type/int_mobile.png\')',
		str: 'url(\'Images/char_filter/char_filter_type/str_mobile.png\')',
		phy: 'url(\'Images/char_filter/char_filter_type/phy_mobile.png\')',
	};
	for (let i = 0; i < charsPerPageNumItem; i++) {
		const charTypeValue = dataCharTypeItems[i].getAttribute(dataCharType);
		const charRarityValue = dataCharRarityItems[i].getAttribute(dataCharRarity);
		const charClassValue = dataCharClassItems[i].getAttribute(dataCharClass);
		const charThumbSrc = charThumb[i].src;

		charType[i].src = charClassMap[charClassValue][charTypeValue];
		charRarity[i].src = charRarityMap[charRarityValue];
		charThumb[i].src = `Images/char/char_thumb/char_${charThumbSrc.slice(-7)}_thumb.png`;
		if (window.matchMedia(`(device-width: 412px)`).matches) {
			charDisplay[i].style.backgroundImage = colorMapMobile[charTypeValue];
		}else{
			charDisplay[i].style.backgroundImage = colorMap[charTypeValue];
		}
		const imagePaths = {
			lr: `Images/char/char_type_base/char_type_base_ssr_${charTypeValue}.png`,
			ur: `Images/char/char_type_base/char_type_base_ssr_${charTypeValue}.png`,
			ssr: `Images/char/char_type_base/char_type_base_ssr_${charTypeValue}.png`,
			sr: `Images/char/char_type_base/char_type_base_sr_${charTypeValue}.png`,
			r: `Images/char/char_type_base/char_type_base_r_${charTypeValue}.png`,
			n: `Images/char/char_type_base/char_type_base_n_${charTypeValue}.png`
		};

		const imagePath = imagePaths[charRarityValue] || "";
		char_type_base[i].src = imagePath;
	}
}