function switch_menu() {
    let dropdown_menu = document.getElementById("drop-down")
    if (dropdown_menu) {
        if (dropdown_menu.classList.contains("opacity-[0]")) {
            dropdown_menu.classList.remove("opacity-[0]")
        } else {
            dropdown_menu.classList.add("opacity-[0]")
        }
    }

}

function link(link) {
    window.location.href = link
}

function getBuy(link, e) {
    let doc = document.getElementById(e);
    if (doc) {
        let quantity = parseInt(doc.value);
        
        if (quantity < 1) {
            alert("A quantidade não pode ser negativa ou zero.");
            return;
        }
        
        window.location.href = link.replace("$quantidade", quantity);
    }
}