let main_div_active = false;

function ToggleMainDiv (event) {

    let tab_div = document.getElementById("tabs");

    if (event.currentTarget.id === "programming") {
        tab_div.style.marginLeft = "0";
        document.getElementById("tab-input-1").checked = true;
        document.getElementById("about-me-texts").style.marginLeft = "0";

    } else if (event.currentTarget.id === "art") {
        tab_div.style.transform = "translateX(-100%)"
        document.getElementById("tab-input-2").checked = true;
        document.getElementById("about-me-texts").style.marginLeft = "calc(-100%)";
        
    } else if (event.currentTarget.id === "design") {
        tab_div.style.transform = "translateX(-200%)"
        document.getElementById("tab-input-3").checked = true;
        document.getElementById("about-me-texts").style.marginLeft = "calc(-200%)";
    }

    
    if (main_div_active) {

        main_div_active = false;

        let main_div = document.getElementById("main-div");
        main_div.classList.remove("div-opened");

        document.getElementById("programming").style.pointerEvents = "none";
        document.getElementById("art").style.pointerEvents = "none";

        setTimeout(function(){
            main_div.style.display = "none";
            document.getElementById("programming").style.pointerEvents = "initial";
            document.getElementById("art").style.pointerEvents = "initial";
        }, 1500);

        let footer = document.getElementById("contact-me");
        footer.style.display = "none";
        
        let shortcut = document.getElementById("shortcut");
        shortcut.style.right = "-200px";
        
        let main = document.getElementById("main");
        main.style.marginTop = "0px";
        
        let header = document.getElementById("header");
        header.style.top = "-100px";

        let nav1 = document.getElementById("menu-1");
        nav1.style.display = "none";
        
        let nav2 = document.getElementById("menu-2");
        nav2.style.display = "none";

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

        let nav1 = document.getElementById("menu-1");
        nav1.style.display = "flex";
        
        let nav2 = document.getElementById("menu-2");
        nav2.style.display = "flex";
    }
}

function setUpMainToggle () {

    // document.getElementById("main-title").addEventListener("click", (event) => {
    //     ToggleMainDiv(event);
    // });

    let main_tab_btns = document.querySelectorAll(".main-tab-btn");

    main_tab_btns.forEach(main_tab_btn => {
        main_tab_btn.addEventListener("click", (event) => {
            ToggleMainDiv(event);
        });
    });

    let start_links = document.querySelectorAll(".bem-vindo");

    start_links.forEach(start_link => {

        start_link.addEventListener("click", (event) => {
                     
            ToggleMainDiv(event);
        
        });
        
    });
    
    
    
}

export default setUpMainToggle;
