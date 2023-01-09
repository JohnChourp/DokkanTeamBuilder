function filterNotDokkanAwakened(){
    let notDokkanAwakenedBtn = document.getElementById("notDokkanAwakened");
    if(notDokkanAwakenedBtn.classList.contains("checkedAwakenBtn")){
        notDokkanAwakenedBtn.classList.remove("checkedAwakenBtn");
        notDokkanAwakenedBtn.style.backgroundColor = "#ddd";
    }else{
        notDokkanAwakenedBtn.classList.add("checkedAwakenBtn");
        notDokkanAwakenedBtn.style.backgroundColor = "#33ccff";
    }
}

function filterPreDokkanAwakened(){
	let preDokkanAwakenedBtn = document.getElementById("preDokkanAwakened");
    if(preDokkanAwakenedBtn.classList.contains("checkedAwakenBtn")){
        preDokkanAwakenedBtn.classList.remove("checkedAwakenBtn");
        preDokkanAwakenedBtn.style.backgroundColor = "#ddd";
    }else{
        preDokkanAwakenedBtn.classList.add("checkedAwakenBtn");
        preDokkanAwakenedBtn.style.backgroundColor = "#33ccff";
    }
}

function filterDokkanAwakened(){
    let dokkanAwakenedBtn = document.getElementById("dokkanAwakened");
    if(dokkanAwakenedBtn.classList.contains("checkedAwakenBtn")){
        dokkanAwakenedBtn.classList.remove("checkedAwakenBtn");
        dokkanAwakenedBtn.style.backgroundColor = "#ddd";
    }else{
        dokkanAwakenedBtn.classList.add("checkedAwakenBtn");
        dokkanAwakenedBtn.style.backgroundColor = "#33ccff";
    }
}