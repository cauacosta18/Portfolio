import available_slides from "./slidesData.js";

export function addEventListeners () {
    
    let buttons = document.querySelectorAll(".go-back");

    buttons.forEach(button => {

        let slide = button.parentElement.parentElement.parentElement.parentElement.id;

        available_slides.forEach(available_slide => {
        
            if (available_slide.getNome() === slide) {
                button.addEventListener("click", () => {
                    previusSlide(slide);
                })
            }
        });

    });

    buttons = document.querySelectorAll(".move-forward");

    buttons.forEach(button => {

        let slide = button.parentElement.parentElement.parentElement.parentElement.id;

        available_slides.forEach(available_slide => {
        
            if (available_slide.getNome() === slide) {
                button.addEventListener("click", () => {
                    nextSlide(slide);
                })
            }
        });

    });

}

function nextSlide (slide) {    

    let current_slide = 0;

    available_slides.forEach(available_slide => {
        if (available_slide.getNome() === slide) {
            
            
            if (available_slide.getCurrentSlide() === (available_slide.getSlides()-1)) {
                available_slide.setCurrentSlide(0);
            } else {
                available_slide.moveForward();
            }
            current_slide = available_slide.getCurrentSlide();
        }
    });

    let selected_slider = document.getElementById(slide);

    let first_slide;
    
    first_slide = selected_slider.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
   
    first_slide.style.marginLeft = `calc(var(--to-change-slide-${slide})*-${current_slide})`
    
}

function previusSlide (slide) {

    let current_slide = 0;

    available_slides.forEach(available_slide => {
        
        if (available_slide.getNome() === slide) {
            if (available_slide.getCurrentSlide() === 0) {
                available_slide.setCurrentSlide(available_slide.getSlides()-1);
                
            } else {
                available_slide.goBack();
            }
            current_slide = available_slide.getCurrentSlide();
        }
    });

    let selected_slider = document.getElementById(slide);

    let first_slide;

    first_slide = selected_slider.firstElementChild.firstElementChild.lastElementChild.firstElementChild;
    
    first_slide.style.marginLeft = `calc(var(--to-change-slide-${slide})*-${current_slide})`;
    
}