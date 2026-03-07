

export function setupTabs () {
    let tab_div = document.getElementById("tabs");

    document.getElementById("tab-1").addEventListener("click", () => {
        tab_div.style.marginLeft = "0";

        document.getElementById("tab-input-1").checked = true;
        document.getElementById("tab-input-2").checked = false;
        document.getElementById("about-me-texts").style.marginLeft = "0";
        
    })
    
    document.getElementById("tab-2").addEventListener("click", () => {
        tab_div.style.marginLeft = "calc(-200% - 40px)";
        
        document.getElementById("tab-input-1").checked = false;
        document.getElementById("tab-input-2").checked = true;
        document.getElementById("about-me-texts").style.marginLeft = "calc(-100% - 20px)";
    })
}