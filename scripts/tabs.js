

export function setupTabs () {
    let tab_div = document.getElementById("tabs");

    document.getElementById("tab-1").addEventListener("click", () => {
        tab_div.style.transform = "translateX(0)"

        document.getElementById("tab-input-1").checked = true;
        document.getElementById("tab-input-2").checked = false;
        document.getElementById("tab-input-3").checked = false;
        document.getElementById("about-me-texts").style.marginLeft = "0";
        // document.getElementById("about-me-texts").style.transform = "translateX(0)";

        
    })
    
    document.getElementById("tab-2").addEventListener("click", () => {
        tab_div.style.transform = "translateX(-100%)"
        
        document.getElementById("tab-input-1").checked = false;
        document.getElementById("tab-input-2").checked = true;
        document.getElementById("tab-input-3").checked = false;
        document.getElementById("about-me-texts").style.marginLeft = "calc(-100%)";
        // document.getElementById("about-me-texts").style.transform = "translateX(-100%)";
    })
    
    document.getElementById("tab-3").addEventListener("click", () => {
        tab_div.style.transform = "translateX(-200%)"
        
        document.getElementById("tab-input-1").checked = false;
        document.getElementById("tab-input-2").checked = false;
        document.getElementById("tab-input-3").checked = true;
        // document.getElementById("about-me-texts").style.transform = "translateX(-200%)";
        document.getElementById("about-me-texts").style.marginLeft = "calc(-200%)";
    })
}