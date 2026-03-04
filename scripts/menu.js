let menu_active = false;

function ToggleMenu () {

    let menu = document.getElementById("menu");

    if (!menu_active) {
        menu.style.left = "20px";
        menu_active = true;
    } else {
        menu.style.left = "-200px";
        menu_active = false;
    }

}

export function setupMenuEvents () {
    document.getElementById("shortcut").addEventListener("click", () => {
        ToggleMenu();
    })

    document.addEventListener("keydown", (event) => {
        
        if (event.key === "m" ) {

            let shortcut = document.getElementById("shortcut");
            shortcut.classList.add("shortcut-pressed");
            
            ToggleMenu();

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
                
                ToggleMenu()
            })


        });
        
    }

    autoCloseMenu();

    document.getElementById("menu-btn").addEventListener("click", () => {

        ToggleMenu(); 
        
    })
}