export function setupTabs () {
    let tab_div = document.getElementById("tabs");

    document.getElementById("tab-1").addEventListener("click", () => {
        tab_div.style.marginLeft = "0";
     
    })

    document.getElementById("tab-2").addEventListener("click", () => {
        tab_div.style.marginLeft = "-200%";
    })
}