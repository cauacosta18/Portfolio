let main_div_active = false;
let programming_text = "<p>Meu nome é Cauã Luiz Costa. Tive meu primeiro contato com a programação em 2024, quando me matriculei em um curso de informática onde aprendi sobre lógica de programação, bem como HTML e CSS.</p><br><p>Sempre gostei de desenhar, ilustrar, criar algo e por esse motivo me interessei pelo desenvolvimento web, assim como da programação no geral.</p>";
let art_text = "";

function ToggleMainDiv (event) {

    if (event.currentTarget.id === "programming") {
        document.getElementById("tab-input-1").checked = true;

        document.getElementById("resume").innerHTML = programming_text;
    } else if (event.currentTarget.id === "art") {
        document.getElementById("tab-input-2").checked = true;

        document.getElementById("resume").innerHTML = art_text;
    }

    
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
