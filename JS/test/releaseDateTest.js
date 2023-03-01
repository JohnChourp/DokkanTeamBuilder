function releaseDateTest() {
	const dataCharRelease = 'data-char-release';
	const charContainerId = document.getElementById("char-container-id");
	const char = document.getElementsByClassName("char");
	const sortReleased = document.getElementById("sort-released");

	if (sortReleased.classList.contains("checkedSortBtn")) {
		const dataCharReleaseItems = document.querySelectorAll('[' + dataCharRelease + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2023" &&
				dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2022" &&
				dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2021" &&
				dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2020" &&
				dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2019" &&
				dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2018" &&
				dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2017" &&
				dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2016" &&
				dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2015") {
				console.log(temp_char[i]);
			}
		}
	}
}