let menu_1_active = false;
let menu_2_active = false;

function isMobile () {
    return navigator.maxTouchPoints > 0 || /Android|iPhone/i.test(navigator.userAgent);
    
}

if (isMobile()) {
    document.getElementById("shortcut").style.display = "none";
}

function SelectedTab () {
    let tabs_inputs = document.querySelectorAll(".tab-input");
    
    for (const tab_input of tabs_inputs) {
        
        if (tab_input.checked) {         
            
            if (tab_input.id === "tab-input-1") {
                return 1;
            } else if (tab_input.id === "tab-input-2") {
                return 2;
            } else {
                return 1;
            }
        }
    };
}

function ToggleMenu (tab) {
    

    let menu = document.getElementById(`menu-${tab}`);
    let menu_active = false;
    
    if (tab === 1) {
        menu_active = menu_1_active;
    } else if (tab === 2) {
        menu_active = menu_2_active;
    } else {

    }

    if (!menu_active) {
        menu.style.left = "20px";
        menu_active = true;
    } else {
        menu.style.left = "-200px";
        menu_active = false;
    }

    if (tab === 1) {
        menu_1_active = menu_active;
    } else if (tab === 2) {
        menu_2_active = menu_active;
    } else {

    }

}



export function setupMenuEvents () {
    document.getElementById("shortcut").addEventListener("click", () => {
                
        ToggleMenu(SelectedTab());
    })

    document.addEventListener("keydown", (event) => {
        
        if (event.key === "m" ) {

            let shortcut = document.getElementById("shortcut");
            shortcut.classList.add("shortcut-pressed");
            
            ToggleMenu(SelectedTab());

        }
    })

    document.addEventListener("keyup", (event) => {
        if (event.key === "m" ) {


            let shortcut = document.getElementById("shortcut");
            shortcut.classList.remove("shortcut-pressed");
            
            
        }
    })

    function autoCloseMenu () {
        let nav_links = document.querySelectorAll(".nav-link");

        nav_links.forEach(nav_link => {
            nav_link.addEventListener("click", () => {
                
                ToggleMenu(SelectedTab())
            })


        });
        
    }

    autoCloseMenu();

    document.getElementById("menu-btn").addEventListener("click", () => {

        ToggleMenu(SelectedTab()); 
        
    });


    let tabs_btns = document.querySelectorAll(".tab-btn");

    tabs_btns.forEach(tab_btn => {
        tab_btn.addEventListener("click", () => {

            if (menu_1_active === true || menu_2_active === true) {
                
                ToggleMenu(SelectedTab());
            }
        
        })
    });
}