// // age.js 

// function setupAge() {
//     let date_of_birth = new Date(2008, 2, 18);
//     let today = new Date();
    
//     let age = today.getFullYear() - date_of_birth.getFullYear();
    
//     let monthDifference = today.getMonth() - date_of_birth.getMonth();
    
//     if (
//         monthDifference < 0 ||
//         (monthDifference === 0 && today.getDate() < date_of_birth.getDate())
//     ) {
//         age--;
//     }
    
//     document.getElementById("idade").textContent = `${age} anos`;
// }

// // alert.js

// function setupAlert () {
//     let buttons = document.querySelectorAll(".sharing");
    
//     buttons.forEach(button => {
//         button.addEventListener("click", (event)=> {            
            
//             let alertDiv = document.getElementById("alert");
//             alertDiv.textContent = "Link ainda não funcional."
//             alertDiv.style.bottom = "20px";

//             setTimeout(function () {
//                 alertDiv.style.bottom = "-80px";
//             }, 3000)
//         })
//     });
    
// }

// // mainToggle.js

// let main_div_active = false;

// function ToggleMainDiv (event) {
    
    
//     if (main_div_active) {
        
//         main_div_active = false;
        
//         let main_div = document.getElementById("main-div");
//         main_div.classList.remove("div-opened");
//         setTimeout(function(){
//             main_div.style.display = "none";
//         }, 750);
        
//         let footer = document.getElementById("contact-me");
//         footer.style.display = "none";
        
//         let shortcut = document.getElementById("shortcut");
//         shortcut.style.right = "-200px";
        
//         let main = document.getElementById("main");
//         main.style.marginTop = "0px";
        
//         let header = document.getElementById("header");
//         header.style.top = "-100px";
        
//         let nav = document.getElementById("menu");
//         nav.style.display = "none";
        
//     } else {
        
//         main_div_active = true;
        
//         let main_div = document.getElementById("main-div");
//         main_div.style.display = "flex";
//         setTimeout(function(){
//             main_div.classList.add("div-opened");
//         }, 10)
        
        
//         let footer = document.getElementById("contact-me");
//         footer.style.display = "flex";
        
//         let shortcut = document.getElementById("shortcut");
//         shortcut.style.right = "15px";
        
//         let main = document.getElementById("main");
//         main.style.marginTop = "80px";
        
//         let header = document.getElementById("header");
//         header.style.top = "0px";
        
//         let nav = document.getElementById("menu");
//         nav.style.display = "flex";
        
//     }
// }

// function setupMainToggle () {
//     document.getElementById("main-title").addEventListener("click", (event) => {
//         ToggleMainDiv(event);
//     });
    
//     document.getElementById("bem-vindo").addEventListener("click", (event) => {
        
//         ToggleMainDiv(event);
        
//     });
    
// }

// // menu.js

// let menu_active = false;

// function ToggleMenu () {
    
//     let menu = document.getElementById("menu");
    
//     if (!menu_active) {
//         menu.style.left = "20px";
//         menu_active = true;
//     } else {
//         menu.style.left = "-200px";
//         menu_active = false;
//     }
    
// }

// function setupMenuEvents () {
//     document.getElementById("shortcut").addEventListener("click", () => {
//         ToggleMenu();
//     })
    
//     document.addEventListener("keydown", (event) => {
        
//         if (event.key === "m" ) {
            
//             let shortcut = document.getElementById("shortcut");
//             shortcut.classList.add("shortcut-pressed");
            
//             ToggleMenu();
            
//         }
//     })
    
//     document.addEventListener("keyup", (event) => {
//         if (event.key === "m" ) {
            
            
//             let shortcut = document.getElementById("shortcut");
//             shortcut.classList.remove("shortcut-pressed");
            
            
            
//         }
//     })
    
//     function autoCloseMenu () {
//         let nav_links = document.querySelectorAll(".nav-link");
        
//         nav_links.forEach(nav_link => {
//             nav_link.addEventListener("click", () => {
                
//                 ToggleMenu()
//             })


//         });
        
//     }
    
//     autoCloseMenu();
    
//     document.getElementById("menu-btn").addEventListener("click", () => {
        
//         ToggleMenu(); 
        
//     })
// }

// // Slide.js

// class Slide {
//     constructor(nome, slides, current_slide) {
//         this.nome = nome,
//         this.slides = slides
//         this.current_slide = current_slide;
//     }
    
//     getNome() {
//         return this.nome;
//     }
    
//     getSlides() {
//         return this.slides;
//     }

//     getCurrentSlide() {
//         return this.current_slide;
//     }

//     setCurrentSlide(newCurrent) {
//         this.current_slide = newCurrent;
//     }
    
//     moveForward () {
//         this.current_slide++;
//     }
    
//     goBack () {
//         this.current_slide--;
//     }
// }

// // slider.js

// function addEventListeners () {
    
//     let buttons = document.querySelectorAll(".go-back");
    
//     buttons.forEach(button => {
        
//         let slide = button.parentElement.parentElement.parentElement.parentElement.id;
        
//         available_slides.forEach(available_slide => {
            
//             if (available_slide.getNome() === slide) {
//                 button.addEventListener("click", () => {
//                     previusSlide(slide);
//                 })
//             }
//         });
        
//     });
    
//     buttons = document.querySelectorAll(".move-forward");
    
//     buttons.forEach(button => {
        
//         let slide = button.parentElement.parentElement.parentElement.parentElement.id;
        
//         available_slides.forEach(available_slide => {
            
//             if (available_slide.getNome() === slide) {
//                 button.addEventListener("click", () => {
//                     nextSlide(slide);
//                 })
//             }
//         });
        
//     });
    
// }

// function nextSlide (slide) {    
    
//     let current_slide = 0;
    
//     available_slides.forEach(available_slide => {
//         if (available_slide.getNome() === slide) {
            
            
//             if (available_slide.getCurrentSlide() === (available_slide.getSlides()-1)) {
//                 available_slide.setCurrentSlide(0);
//             } else {
//                 available_slide.moveForward();
//             }
//             current_slide = available_slide.getCurrentSlide();
//         }
//     });
    
//     let selected_slider = document.getElementById(slide);
    
//     let first_slide;
    
//     first_slide = selected_slider.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
    
//     first_slide.style.marginLeft = `calc(var(--to-change-slide-${slide})*-${current_slide})`
    
// }

// function previusSlide (slide) {
    
//     let current_slide = 0;
    
//     available_slides.forEach(available_slide => {
        
//         if (available_slide.getNome() === slide) {
//             if (available_slide.getCurrentSlide() === 0) {
//                 available_slide.setCurrentSlide(available_slide.getSlides()-1);
                
//             } else {
//                 available_slide.goBack();
//             }
//             current_slide = available_slide.getCurrentSlide();
//         }
//     });
    
//     let selected_slider = document.getElementById(slide);
    
//     let first_slide;
    
//     first_slide = selected_slider.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
    
//     first_slide.style.marginLeft = `calc(var(--to-change-slide-${slide})*-${current_slide})`;
    
// }

// // slidesData.js

// const available_slides = [
//     new Slide("mines",10,0),
//     new Slide("java",3,0),
//     new Slide("cardapio",11,0),
//     new Slide("proxwork",8,0),
//     new Slide("colecao",2,0),
//     new Slide("quiz",5,0)
// ];

// setupAge();
// setupMainToggle();
// setupMenuEvents();
// addEventListeners();
// setupAlert();