let main_div_active = false;

function ToggleMainDiv (event) {

    
    if (main_div_active) {

        main_div_active = false;

        let main_div = document.getElementById("main-div");
        main_div.classList.remove("div-opened");
        setTimeout(function(){
            main_div.style.display = "none";
        }, 750);

        let footer = document.getElementById("contact-me");
        footer.style.display = "none";
        
        let shortcut = document.getElementById("shortcut");
        shortcut.style.right = "-200px";
        
        let main = document.getElementById("main");
        main.style.marginTop = "0px";
        
        let header = document.getElementById("header");
        header.style.top = "-100px";

        let nav = document.getElementById("menu");
        nav.style.display = "none";
        
    } else {

        main_div_active = true;

        let main_div = document.getElementById("main-div");
        main_div.style.display = "flex";
        setTimeout(function(){
            main_div.classList.add("div-opened");
        }, 10)
        

        let footer = document.getElementById("contact-me");
        footer.style.display = "flex";

        let shortcut = document.getElementById("shortcut");
        shortcut.style.right = "15px";
        
        let main = document.getElementById("main");
        main.style.marginTop = "80px";
        
        let header = document.getElementById("header");
        header.style.top = "0px";

        let nav = document.getElementById("menu");
        nav.style.display = "flex";
        
    }
}

function setUpMainToggle () {
    document.getElementById("main-title").addEventListener("click", (event) => {
        ToggleMainDiv(event);
    });
    
    document.getElementById("bem-vindo").addEventListener("click", (event) => {
    
        ToggleMainDiv(event);
    
    });
    
}

export default setUpMainToggle;
