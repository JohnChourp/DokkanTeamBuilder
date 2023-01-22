function filterSuperAttackTypeKiBlast() {
    let kiBlastBtn = document.getElementById("ki-blast");
    if (kiBlastBtn.classList.contains("checkedSuperAttackTypeBtn")) {
        kiBlastBtn.classList.remove("checkedSuperAttackTypeBtn");
        kiBlastBtn.style.backgroundColor = "#ddd";
    } else {
        kiBlastBtn.classList.add("checkedSuperAttackTypeBtn");
        kiBlastBtn.style.backgroundColor = "#33ccff";
    }
}

function filterSuperAttackTypeUnarmed() {
    let unarmedBtn = document.getElementById("unarmed");
    if (unarmedBtn.classList.contains("checkedSuperAttackTypeBtn")) {
        unarmedBtn.classList.remove("checkedSuperAttackTypeBtn");
        unarmedBtn.style.backgroundColor = "#ddd";
    } else {
        unarmedBtn.classList.add("checkedSuperAttackTypeBtn");
        unarmedBtn.style.backgroundColor = "#33ccff";
    }
}

function filterSuperAttackTypePhysical() {
    let physicalBtn = document.getElementById("physical");
    if (physicalBtn.classList.contains("checkedSuperAttackTypeBtn")) {
        physicalBtn.classList.remove("checkedSuperAttackTypeBtn");
        physicalBtn.style.backgroundColor = "#ddd";
    } else {
        physicalBtn.classList.add("checkedSuperAttackTypeBtn");
        physicalBtn.style.backgroundColor = "#33ccff";
    }
}

function filterSuperAttackTypeOther() {
    let otherBtn = document.getElementById("other");
    if (otherBtn.classList.contains("checkedSuperAttackTypeBtn")) {
        otherBtn.classList.remove("checkedSuperAttackTypeBtn");
        otherBtn.style.backgroundColor = "#ddd";
    } else {
        otherBtn.classList.add("checkedSuperAttackTypeBtn");
        otherBtn.style.backgroundColor = "#33ccff";
    }
}

function removeAllSuperAttackType() {
    let filterSuperAttackTypeId = ["ki-blast", "unarmed", "physical", "other"];
    for (let i = 0; i < filterSuperAttackTypeId.length; i++) {
        document.getElementById(filterSuperAttackTypeId[i]).classList.remove("checkedSuperAttackTypeBtn");
        document.getElementById(filterSuperAttackTypeId[i]).style.backgroundColor = "#ddd";
        document.getElementById(filterSuperAttackTypeId[i]).style.cursor = "pointer";
        document.getElementById(filterSuperAttackTypeId[i]).style.color = "black";
        document.getElementById(filterSuperAttackTypeId[i]).removeAttribute("disabled");
    }
}